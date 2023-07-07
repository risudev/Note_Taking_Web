import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';


const CreateArea = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    setNote((prevNote) => {
      return{
        ...prevNote,
        [name]:value,
      };
    });
  }

  function expand() {
    setIsExpanded(true);
  }

  function submitNote(event){
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    })
  }
  return (
    <div>
      <form className='create-note'>
        {isExpanded && <input name="title" placeholder='Title' value={note.title} onChange={handleChange}/>}

        <textarea name='content' placeholder='Take a note...' rows={isExpanded ? 3 : 1}
          onClick={expand} onChange={handleChange} value={note.content}/>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea
