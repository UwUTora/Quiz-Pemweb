import "../css/ToDoList.css";

export default function ToDoList({ todos, onOpenAdd, onSelectTodo, onDeleteTodo }) {
  return (
    <section className="todo-list-wrapper">
      <header className="todo-header">
        <h1 className="todo-title">Todo List</h1>
        <button type="button" className="btn-add" onClick={onOpenAdd}>
          Tambah Todo
        </button>
      </header>

      <div className="todo-table-header">
        <span>Judul</span>
        <span>Status</span>
        <span>Prioritas</span>
        <span>Deadline</span>
        <span className="todo-col-action-header">Aksi</span>
      </div>

      {todos.length === 0 ? (
        <div className="todo-empty">Belum ada daftar tugas.</div>
      ) : (
        <div className="todo-list-rows">
          {todos.map((todo) => (
            <div key={todo.id} className="todo-row-card">
              <span className="todo-cell-title" title={todo.title}>
                {todo.title}
              </span>
              <span>{todo.status}</span>
              <span>{todo.priority}</span>
              <span>{todo.deadline}</span>
              <div className="todo-cell-actions">
                <button type="button" className="btn-icon btn-view" title="Lihat Detail" onClick={() => onSelectTodo(todo)}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>

                <button type="button" className="btn-icon btn-delete" title="Hapus Todo" onClick={() => onDeleteTodo(todo)}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}