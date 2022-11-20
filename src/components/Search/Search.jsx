import React from "react";
import style from "./Search.module.css";

function Search() {
  return <input type="text" className={style.search} placeholder="Search..." />;
}

export default Search;
