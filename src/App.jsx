import { useState, useEffect } from 'react'
import './App.css'
import setupIndexedDB from "use-indexeddb";
import { idbConfig } from "./db-config.js"
import { useTasksStore } from './store';
import './assets/styles/note.css';
import TopBar from './assets/components/TopBar/TopBar';
import SideBar from './assets/components/SideBar/SideBar';
import Workspace from './assets/components/Workspace/Workspace';
import { Note } from './note'

function App() {
  useEffect(() => {
    setupIndexedDB(idbConfig)
      .then(() => console.log("success"))
      .catch(e => console.error("error / unsupported", e));
  }, []);

  const tasks = useTasksStore((state) => state.tasks)

  return (
    <div className="note-app">
      <div className="note-window">
        <TopBar />
        <div className="note-container">
          <SideBar notes={[new Note(1, 'Вынести мусор', 'не вышло')]} />
          <Workspace />
        </div>
      </div>
    </div>
  )
}

export default App
