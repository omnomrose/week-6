import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { TodoContext } from "../data/ToDoContext";

export default function TodoForm() {
  const {
    tasks,
    addTask,
    removeTask,
    updateTask,
    setEditing,
    editing
  } = useContext(TodoContext);

  let initialData = {
    title: ""
  };

  if (editing !== "new") {
    initialData = tasks.find(function (p) {
      return p.id === editing;
    });
  }

  const [task, setTask] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();

    if (editing === "new") {
      addTask({ ...task, id: nanoid() });
    } else {
      updateTask(task);
    }
  }

  function handleTitleChange(e, field) {
    setTask({ ...task, [field]: e.target.value });
    console.log(task);
  }

  function toggleComplete(task) {
    const updatedTasks = tasks.map(function (t) {
      if (t.id === task.id) {
        t.complete = !t.complete;
      }
      return t;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="task">
      <form onSubmit={handleSubmit}>
        <div className="task-input">
          <label>
            <input
              type="text"
              onChange={(e) => handleTitleChange(e, "title")}
              value={task.title}
              placeholder="Add new task..."
            />
          </label>
        </div>

        <div className="form-btns">
          <button className="add" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
