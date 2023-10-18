import { TodoContext } from "../data/ToDoContext";
import { useContext } from "react";

export default function Todo(props) {
  const { setEditing } = useContext(TodoContext);
  const task = props.task;

  function handleDelete() {
    props.remove(task);
  }

  function handleEdit() {}

  function handleStatusChange() {
    props.toggleClick(task);
  }

  return (
    <div className="singleTask">
      <div className="todoIndo">
        <input
          type="checkbox"
          onChange={handleStatusChange}
          value={task.clicked}
        />
        <label className={task.clicked ? "completed" : ""}>{task.title}</label>
      </div>
      <div className="buttons">
        <button
          onClick={() => setEditing(task.id)}
          className="actionButton edit-btn"
        >
          edit
        </button>
        <button onClick={handleDelete} className="actionButton delete-btn">
          remove
        </button>
      </div>
    </div>
  );
}
