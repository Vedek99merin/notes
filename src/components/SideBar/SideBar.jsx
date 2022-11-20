import style from "./SideBar.module.css";
import { useTasksStore } from "../../store.js";
import { Link } from "react-router-dom";
import Task from "../Task/Task";

function SideBar() {
  const notes = useTasksStore((state) => state.tasks);

  return notes.length === 0 ? (
    <ul className={style.noteList}>
      <li className={style.note}>
        <h2>No tasks</h2>
      </li>
    </ul>
  ) : (
    <ul className={style.noteList}>
      {notes.map((item) => (
        <Task key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default SideBar;
