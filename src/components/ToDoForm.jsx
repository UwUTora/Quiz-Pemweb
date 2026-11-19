import { useState } from "react";
import "../css/ToDoForm.css";

export default function ToDoForm({ title, submitLabel, initialData, onClose, onSubmit }) {
  const [form, setForm] = useState({
    title: initialData?.title ?? "",
    description: initialData?.description ?? "",
    status: initialData?.status ?? "to-do",
    priority: initialData?.priority ?? "low",
    deadline: initialData?.deadline ?? "",
  });
  
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title.trim()==false){
      return;
    }
    onSubmit({...form, title: form.title.trim(), description: form.description.trim()});
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{title}</h2>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="todo-title">Judul</label>
            <input id="todo-title" type="text" required value={form.title} onChange={(e) => handleChange("title", e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="todo-desc">Deskripsi</label>
            <textarea id="todo-desc" rows={3} value={form.description} onChange={(e) => handleChange("description", e.target.value)} />
          </div>

          <div className="form-row-two">
            <div className="form-group">
              <label htmlFor="todo-status">Status</label>
              <select id="todo-status" value={form.status} onChange={(e) => handleChange("status", e.target.value)}>
                <option value="to-do">to-do</option>
                <option value="in progress">in progress</option>
                <option value="done">done</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="todo-priority">Prioritas</label>
              <select id="todo-priority" value={form.priority} onChange={(e) => handleChange("priority", e.target.value)}>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="todo-deadline">Deadline</label>
            <input id="todo-deadline" type="date" required value={form.deadline} onChange={(e) => handleChange("deadline", e.target.value)} />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-modal-cancel" onClick={onClose}>Batal</button>
            <button type="submit" className="btn-modal-submit">{submitLabel}</button>
          </div>
        </form>
      </div>
    </div>
  );
}