export const NoteItem = ({ note, onDelete }) => {
  const { content, id } = note;

  return (
    <li className='note'>
      <p className="note__text">{content}</p>
      <button type='button' onClick={() => onDelete(id)} className="note__btn btn-delete">
          <img src="/images/cross.jpg" alt="" />
      </button>
    </li>
  )
}
