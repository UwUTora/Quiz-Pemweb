import { useState } from "react";
import  dummyTodos  from "./data/DummyTodos";
import TodoList from "./components/ToDoList";
import TodoDetail from "./components/ToDoDetail";
import TodoFormModal from "./components/ToDoForm";
import "./css/App.css";

export default function App() {
  const [todos, setTodos] = useState(dummyTodos);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  const showFeedback = (message) => {
    setFeedback(message);
    setTimeout(() => setFeedback(""), 3000);
  };

  const handleAddTodo = (newTodoData) => {
    const newTodo = {
      id: Date.now(),
      ...newTodoData,
    };
    setTodos((prev) => [...prev, newTodo]);
    setIsAddOpen(false);
    showFeedback("Tugas baru berhasil ditambahkan.");
  };

  const handleUpdateTodo = (updatedFields) => {
    const updatedTodo = { ...selectedTodo, ...updatedFields };
    setTodos((prev) =>
      prev.map((item) => (item.id === updatedTodo.id ? updatedTodo : item))
    );
    setSelectedTodo(updatedTodo);
    setIsEditOpen(false);
    showFeedback("Tugas berhasil diperbarui.");
  };

  const handleDeleteTodo = (todo) => {
    const confirmed = window.confirm(`Apakah Anda yakin ingin menghapus "${todo.title}"?`);
    if (!confirmed) return;

    setTodos((prev) => prev.filter((item) => item.id !== todo.id));
    if (selectedTodo?.id === todo.id) {
      setSelectedTodo(null);
    }
    showFeedback(`Tugas "${todo.title}" berhasil dihapus.`);
  };

  return (
    <main className="app-container">
      {feedback && <div className="toast-banner">{feedback}</div>}

      {selectedTodo ? (
        <TodoDetail todo={selectedTodo} onBack={() => setSelectedTodo(null)} onOpenEdit={() => setIsEditOpen(true)}/>
      ) : (
        <TodoList todos={todos} onOpenAdd={() => setIsAddOpen(true)} onSelectTodo={(todo) => setSelectedTodo(todo)} onDeleteTodo={handleDeleteTodo}/>
      )}

      {isAddOpen && (
        <TodoFormModal title="Tambah Todo" submitLabel="Tambah" onClose={() => setIsAddOpen(false)} onSubmit={handleAddTodo}/>
      )}

      {isEditOpen && selectedTodo && (
        <TodoFormModal key={selectedTodo.id} title="Update Todo" submitLabel="Update" initialData={selectedTodo} onClose={() => setIsEditOpen(false)} onSubmit={handleUpdateTodo}/>
      )}
    </main>
  );
}