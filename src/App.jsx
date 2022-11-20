import { useTasksStore } from "./store";
import "./assets/styles/note.css";
import { Workspace, SideBar, TopBar } from "./components";

function App() {
  const tasks = useTasksStore((state) => state.tasks);

  return (
    <div className="note-app">
      <TopBar />
      <div className="note-container">
        <SideBar />
        <Workspace />
      </div>
    </div>
  );
}

export default App;
