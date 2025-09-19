import { useState, ChangeEvent, FormEvent } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Go to Baitussalam", completed: false },
    { id: 2, text: "Preparetions of react exams", completed: true },
  ]);
  const [newTask, setNewTask] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newTask.trim()) {
      alert("Input cannot be empty");
      return;
    }

    if (editingId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingId ? { ...todo, text: newTask } : todo
        )
      );
      setEditingId(null);
    } else {
      const newTodo: Todo = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
    }

    setNewTask("");
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditTodo = (todo: Todo) => {
    setEditingId(todo.id);
    setNewTask(todo.text);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setNewTask("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Todo App
        </h1>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex items-center text-black">
            <input
              type="text"
              value={newTask}
              onChange={handleNewTask}
              placeholder="What do you want to do?"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors"
            >
              {editingId ? "Update" : "Add"}
            </button>
          </div>
          {editingId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="mt-2 px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel Edit
            </button>
          )}
        </form>

        {todos.length > 0 ? (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  todo.completed
                    ? "bg-gray-100 border-gray-200"
                    : "bg-white border-gray-300"
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id)}
                    className="h-5 w-5 text-blue-500 mr-3"
                  />
                  <span
                    className={`text-lg ${
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }`}
                    onClick={() => handleToggleComplete(todo.id)}
                  >
                    {todo.text}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditTodo(todo)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 py-4">
            You don't have any todos. Add one above!
          </p>
        )}

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-center text-gray-600">
            {todos.filter((todo) => todo.completed).length} of {todos.length}{" "}
            tasks completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
