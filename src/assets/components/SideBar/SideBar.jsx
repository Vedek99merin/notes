import { Note } from "../../../note.js";
import { useState } from "react";
import style from "./SideBar.module.css";
import { useTasksStore } from "../../../store.js";

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
        <li key={item.id} className={style.note}>
          <h2>{item.name}</h2>
          <p>{item.dateCreated.toLocaleDateString("en-US")}</p>
        </li>
      ))}
    </ul>
  );
}

export default SideBar;
