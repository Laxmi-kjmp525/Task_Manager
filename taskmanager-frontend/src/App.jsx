import { useEffect, useMemo, useState } from "react";
import "./App.css";

const API_BASE = "http://localhost:8081/api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("PENDING");

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const pendingCount = useMemo(
    () => tasks.filter((t) => t.status === "PENDING").length,
    [tasks]
  );
  const completedCount = useMemo(
    () => tasks.filter((t) => t.status === "COMPLETED").length,
    [tasks]
  );

  async function fetchTasks() {
    try {
      setError("");
      setLoading(true);
      const res = await fetch(API_BASE);
      if (!res.ok) throw new Error("Failed to fetch tasks");
      const data = await res.json();
      setTasks(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function addTask(e) {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      setError("");
      setSaving(true);

      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          status,
        }),
      });

      if (!res.ok) {
        // backend may send validation json, but keep simple
        throw new Error("Failed to add task");
      }

      // Option 1: refetch for clean sync with DB
      await fetchTasks();

      // clear form
      setTitle("");
      setDescription("");
      setStatus("PENDING");
    } catch (e) {
      setError(e.message || "Failed to add task");
    } finally {
      setSaving(false);
    }
  }

  async function toggleStatus(task) {
    const newStatus = task.status === "PENDING" ? "COMPLETED" : "PENDING";

    try {
      setError("");
      const res = await fetch(`${API_BASE}/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: task.title,
          description: task.description,
          status: newStatus,
        }),
      });

      if (!res.ok) throw new Error("Failed to update task");

      // Update UI instantly
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, status: newStatus } : t))
      );
    } catch (e) {
      setError(e.message || "Failed to update task");
    }
  }

  async function deleteTask(id) {
    const ok = confirm("Delete this task?");
    if (!ok) return;

    try {
      setError("");
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete task");

      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (e) {
      setError(e.message || "Failed to delete task");
    }
  }

  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <div>
            <h1 className="title">Task Manager</h1>
            <p className="subtitle">Spring Boot + PostgreSQL + React</p>
          </div>

          <div className="stats">
            <div className="chip">
              <span className="dot pending" />
              Pending: <b>{pendingCount}</b>
            </div>
            <div className="chip">
              <span className="dot completed" />
              Completed: <b>{completedCount}</b>
            </div>
          </div>
        </header>

        {error ? (
          <div className="alert">
            <b>⚠️</b> {error}
          </div>
        ) : null}

        <main className="grid">
          {/* Left: Form */}
          <section className="card">
            <h2 className="cardTitle">Add a Task</h2>

            <form onSubmit={addTask} className="form">
              <label className="label">
                Title <span className="req">*</span>
              </label>
              <input
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Learn Spring Boot"
              />

              <label className="label">Description</label>
              <input
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. Build CRUD APIs"
              />

              <label className="label">Status</label>
              <select
                className="input"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="PENDING">PENDING</option>
                <option value="COMPLETED">COMPLETED</option>
              </select>

              <button className="btn primary" type="submit" disabled={saving}>
                {saving ? "Adding..." : "Add Task"}
              </button>
            </form>

            <div className="hint">
              Tip: Click <b>Toggle</b> to mark completed, and <b>Delete</b> to
              remove.
            </div>
          </section>

          {/* Right: List */}
          <section className="card">
            <div className="listHeader">
              <h2 className="cardTitle">All Tasks</h2>
              <button className="btn ghost" onClick={fetchTasks} disabled={loading}>
                {loading ? "Refreshing..." : "Refresh"}
              </button>
            </div>

            {loading ? (
              <div className="empty">Loading tasks...</div>
            ) : tasks.length === 0 ? (
              <div className="empty">No tasks found</div>
            ) : (
              <ul className="list">
                {tasks.map((task) => (
                  <li key={task.id} className="item">
                    <div className="itemLeft">
                      <div className="itemTitleRow">
                        <span className="itemTitle">{task.title}</span>
                        <span
                          className={`badge ${
                            task.status === "COMPLETED" ? "badgeDone" : "badgePending"
                          }`}
                        >
                          {task.status}
                        </span>
                      </div>
                      {task.description ? (
                        <div className="itemDesc">{task.description}</div>
                      ) : (
                        <div className="itemDesc muted">No description</div>
                      )}
                      <div className="itemMeta">ID: {task.id}</div>
                    </div>

                    <div className="itemActions">
                      <button
                        className="btn small"
                        onClick={() => toggleStatus(task)}
                      >
                        Toggle
                      </button>
                      <button
                        className="btn small danger"
                        onClick={() => deleteTask(task.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}