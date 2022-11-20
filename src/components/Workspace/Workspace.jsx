import { useEffect } from "react";
import { useTasksStore } from "../../store";
import style from "./Workspace.module.css";

function Workspace() {
  const selectedTaskId = useTasksStore((state) => state.selectedTaskId);
  const tasks = useTasksStore((state) => state.tasks);
  const selectedTask = tasks.find((n) => n.id === selectedTaskId);
  const editTask = useTasksStore((state) => state.editTask);

  const handleChange = (e) => {
    editTask(selectedTask.id, {
      [e.target.name]: e.target.value,
    });
  };

  return !selectedTask ? (
    <div className={style.editor}>
      <h2>No task</h2>
    </div>
  ) : (
    <div className={style.editor}>
      <div className="note-editor__date">
        {new Date(selectedTask.dateCreated).toLocaleDateString("en-US")}
      </div>
      <input
        name="name"
        type="text"
        value={selectedTask.name}
        className={style.nameInput}
        onInput={handleChange}
      />
      <textarea
        value={selectedTask.content}
        className={style.contentInput}
        name="description"
        onInput={handleChange}
      />
    </div>
  );
}

export default Workspace;
