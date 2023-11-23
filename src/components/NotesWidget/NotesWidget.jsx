import { NotesForm } from "./NotesForm/NotesForm";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { NotesContainer } from "./NotesContainer/NotesContainer";


export const NotesWidget = () => {
  const initialNote = {content: '', id: ''};
  const [note, setNote] = useState(initialNote);
  const [notes, setNotes] = useState([]);
  const url = 'http://localhost:7070/notes';

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    fetch(url)
      .then((response) => response.json())
      .then(result => {
        if (result) {
          setNotes(result);
        }
      });
  }

  async function createNewNote() {
    const newNote = {...note, id: uuidv4()};
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newNote),
    })
      .then(response => {
        if (response.ok) {
          getNotes();
          setNote(initialNote);
        }
      })
  }

  async function deleteNote(id) {
    fetch(`${url}/${id}`, {method: 'DELETE'})
      .then(response => {
        if (response.ok) {
          getNotes();
        }
      })
  }
  
  function handleChange(e) {
    const { value } = e.target;
    setNote({...note, content: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    createNewNote();
  }

  return (
    <>
      <NotesForm note={note} onChange={handleChange} onSubmit={handleSubmit} />
      <NotesContainer notes={notes} onDelete={deleteNote}/>
    </>
  )
}
