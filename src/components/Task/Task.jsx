import React, { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Task.module.css";

function Task({ item }) {
  return (
    <NavLink
      to={`tasks/${item.id}`}
      className={({ isActive }) =>
        isActive
          ? [style.noteLink, style.noteLinkActive].join(" ")
          : style.noteLink
      }
    >
      <li className={style.note}>
        <h2>{item.name}</h2>
        <p>{item.dateCreated.toLocaleDateString("en-US")}</p>
        {/* <Link to={`tasks/${item.id}`} className={style.noteLink} /> */}
      </li>
    </NavLink>
  );
}

export default Task;
