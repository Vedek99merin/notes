import { useEffect } from "react";
import { useTasksStore } from "../../store";
import style from "./Workspace.module.css";

function Workspace() {
  const selectedTask = useTasksStore((state) => state.getSelectedTask());

  useEffect(() => {
    console.log(selectedTask);
  }, [selectedTask]);

  return !selectedTask ? (
    <div className={style.editor}>
      <h2>No task</h2>
    </div>
  ) : (
    <div className={style.editor}>
      <div className="note-editor__date">
        {new Date(selectedTask.dateCreated).toLocaleDateString("en-US")}
      </div>
      <h2>{selectedTask.name}</h2>
      <p>{selectedTask.content}</p>
    </div>
  );
}

export default Workspace;
