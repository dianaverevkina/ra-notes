import { NoteItem } from './NoteItem/NoteItem'

export const NotesContainer = ({ notes, onDelete }) => {
  return (
    <ul className='notes-container'>
      {notes.map(note => <NoteItem
        key={note.id} 
        note={note}
        onDelete={onDelete}
      />)}
    </ul>
  )
}
