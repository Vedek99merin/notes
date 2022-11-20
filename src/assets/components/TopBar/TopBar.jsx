import { TrashIcon, EditIcon } from "./icons";
import style from "./TopBar.module.css";

function TopBar() {
  return (
    <div className={style.topBar}>
      <TrashIcon />
      <EditIcon />
    </div>
  );
}
export default TopBar;
