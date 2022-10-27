function SideBar({notes=[]}) {
  if(notes.length == 0){
    return (
      <ul className="note-sidebar">
          <li className="note active">
            <h2>Заметку забыл создать ГОНДОН!</h2>
          </li>
      </ul>
    )
  }

  
    return (
      <ul className="note-sidebar">
        
        {notes.map(item => (
          <li key={item.id} className="note active">
            <h2>{item.name}</h2>
            <p>{item.dateCreated.toLocaleDateString("en-US")}</p>
          </li>
          ))}
      </ul>
    )
  }




export default SideBar