import { useTasksStore } from "./store";
import "./assets/styles/note.css";
import { Workspace, SideBar, TopBar } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <div className="note-app">
      <TopBar />
      <div className="note-container">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
