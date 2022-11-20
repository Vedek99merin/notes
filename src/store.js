import create from 'zustand'
import { Note } from './note'
import { v4 as uuidv4 } from 'uuid';

export const useTasksStore = create( ( set ) => ( {
  tasks: [],
  selectedTaskId: null,
  createTask: ( name, description ) => set( state => ( {
    tasks: [
      ...state.tasks,
      new Note(
        uuidv4(),
        name,
        description,
        new Date()
      )
    ]
  } ) ),
  deleteTask: ( id ) => set( state => ( {
    tasks: state.tasks.filter( task => task.id !== id )
  } ) ),
  editTask: ( id, content ) => set( state => {
    const targetIndex = state.tasks.findIndex( task => task.id === id );
    const newTasks = [...state.tasks]

    if ( content.name ) {
      newTasks[targetIndex].name = content.name
    }

    if ( content.description ) {
      newTasks[targetIndex].content = content.description
    }

    return {
      tasks: newTasks
    }
  } ),
  setSelectedTaskId: ( id ) => set( state => ( {
    selectedTaskId: id
  } ) ),
} ) )