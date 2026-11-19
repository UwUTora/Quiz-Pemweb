export default function TodoTable({ todos, onSelect, onEdit, onDelete }) {
  return (
    <table width="100%" cellPadding="10" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ borderBottom: "2px solid #e5e7eb", textAlign: "left" }}>
          <th>Judul</th>
          <th>Status</th>
          <th>Prioritas</th>
          <th>Deadline</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {todos.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center", padding: "1.5rem" }}>
              Belum ada tugas. Klik tombol <strong>Tambah Todo</strong> untuk menambahkan.
            </td>
          </tr>
        ) : (
          todos.map((todo) => (
            <tr key={todo.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
              <td>{todo.title}</td>
              <td>{todo.status}</td>
              <td>{todo.priority}</td>
              <td>{todo.deadline}</td>
              <td style={{ display: "flex", gap: "0.5rem" }}>
                <button type="button" onClick={() => onSelect(todo)} style={{backgroundColor: "#2563eb", color: "#fff", border: "none", padding: "0.35rem 0.65rem", borderRadius: 4, cursor: "pointer"}}>
                  Detail
                </button>
                <button type="button" onClick={() => onEdit(todo)} style={{backgroundColor: "#0f766e", color: "#fff", border: "none", padding: "0.35rem 0.65rem", borderRadius: 4, cursor: "pointer"}}>
                  Edit
                </button>
                <button type="button" onClick={() => onDelete(todo)} style={{ backgroundColor: "#dc2626", color: "#fff", border: "none", padding: "0.35rem 0.65rem", borderRadius: 4, cursor: "pointer"}}>
                  Hapus
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}