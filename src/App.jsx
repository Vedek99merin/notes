import { useTasksStore } from './store';
import './assets/styles/note.css';
import TopBar from './assets/components/TopBar/TopBar';
import SideBar from './assets/components/SideBar/SideBar';
import Workspace from './assets/components/Workspace/Workspace';
import { Note } from './note'

function App() {
  const tasks = useTasksStore((state) => state.tasks)

  return (
    <div className="note-app">
      <TopBar />
      <div className="note-container">
        <SideBar notes={[new Note(1, 'Вынести мусор', 'не вышло')]} />
        <Workspace />
      </div>
    </div>
  )
}

export default App
