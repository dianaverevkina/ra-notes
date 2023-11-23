export const NotesForm = ({ note, onChange, onSubmit }) => {
  const { content } = note;
  
  return (
    <form 
      name='watches'
      className="form"
      onSubmit={onSubmit}
    >
      <h3 className="form__title">New note</h3>
      <div className="form__field">
        <textarea 
          name="note" 
          value={content}
          className="form__input" 
          placeholder="Type your note here"
          onChange={onChange}
        />
        <button className="form__btn-send">
          <span className="form__btn-icon">
            <img src="./images/Send.svg" alt="" />
          </span>
        </button>
      </div>
    </form>
  )
}
