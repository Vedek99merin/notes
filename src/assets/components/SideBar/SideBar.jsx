import { Note } from "../../../note.js";
import { useState } from "react";
import style from "./SideBar.module.css";

function SideBar() {
  const [notes, setNotes] = useState([
    new Note(1, "Вынести мусор", "не вышло"),
  ]);

  if (notes.length == 0) {
    return (
      <ul className={style.noteList}>
        <li className="note active">
          <h2>Заметку забыл создать ГОНДОН!</h2>
        </li>
      </ul>
    );
  }

  return (
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
