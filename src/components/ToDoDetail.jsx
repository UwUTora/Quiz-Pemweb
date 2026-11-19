import "../css/TodoDetail.css";

export default function ToDoDetail({ todo, onBack, onOpenEdit }) {
  if (todo==false){
    return null;
  } 

  return (
    <section className="detail-page">
      <div className="detail-card">
        <div className="detail-left">
          <div>
            <h2 className="detail-label">Judul</h2>
            <p className="detail-value">{todo.title}</p>
          </div>

          <div>
            <h2 className="detail-label">Deskripsi</h2>
            <div className="detail-description-box">
              {todo.description || "Tidak ada deskripsi."}
            </div>
          </div>
        </div>

        <div className="detail-right">
          <div className="detail-meta-group">
            <div>
              <h3 className="detail-label">Status</h3>
              <p className="detail-value">{todo.status}</p>
            </div>

            <div>
              <h3 className="detail-label">Prioritas</h3>
              <p className="detail-value">{todo.priority}</p>
            </div>

            <div>
              <h3 className="detail-label">Deadline</h3>
              <p className="detail-value">{todo.deadline}</p>
            </div>
          </div>

          <div className="detail-actions">
            <button type="button" className="btn-back" onClick={onBack}>
              Kembali
            </button>
            <button type="button" className="btn-edit" onClick={onOpenEdit}>
              Update
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}