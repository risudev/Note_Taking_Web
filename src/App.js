import React, { useState } from 'react';
import CreateArea from './component/CreateArea';
import Header from './component/Header';
import Note from './component/Note';
import "./App.css";
import Footer from './component/Footer';

const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes((prevNotes) =>{
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id){
    setNotes((prevNotes) =>{
      return prevNotes.filter((noteItem,index) =>{
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header/>
      <CreateArea onAdd={addNote}/>
      {
      notes.map((noteItem, index) =>{
        console.log(noteItem);
        return <Note key={index} title={noteItem.title} 
        content={noteItem.content} id={index} onDelete={deleteNote}/>;
      })}
        <Footer/>
    </div>
  );
};

export default App;
