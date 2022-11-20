class NotesStorage {
  KEY = "notes";

  getNotes() {
    const notes = JSON.parse( localStorage.getItem( this.KEY ) ) || [];
    return notes.map( note => {
      note.dateCreated = new Date( note.dateCreated )
      note.dateUpdated = new Date( note.dateUpdated )
      return note;
    } )
  }

  addNote( note ) {
    const notes = this.getNotes()
    localStorage.setItem( this.KEY, JSON.stringify( [...notes, note] ) )
  }

  setNotes( notes ) {
    localStorage.setItem( this.KEY, JSON.stringify( notes ) )
  }
}

export const notesStorage = new NotesStorage()