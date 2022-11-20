import { useTasksStore } from "../../store";
import { TrashIcon, EditIcon } from "./icons";
import style from "./TopBar.module.css";

function TopBar() {
  const selectedId = useTasksStore((state) => state.selectedTaskId);
  const deleteTask = useTasksStore((state) => state.deleteTask);
  const createTask = useTasksStore((state) => state.createTask);

  const handleDelete = (e) => {
    e.preventDefault();

    if (!selectedId) {
      alert("No selected task to delete");
      return;
    }

    deleteTask(selectedId);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createTask("New task", "Type here...");
  };

  return (
    <div className={style.topBar}>
      <TrashIcon onClick={handleDelete} className={style.actionButton} />
      <EditIcon onClick={handleCreate} className={style.actionButton} />
    </div>
  );
}
export default TopBar;
