const AddNote = ({ note, noteList, setNote, setNoteList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.note.value.trim() === "") {
    } else {
      if (note.id) {
        let newDate = new Date();
        let updatedNoteList = noteList.map((currEle) =>
          currEle.id === note.id
            ? {
                ...note,
                name: note.name,
                date: `${newDate.toLocaleTimeString()} ${newDate.toLocaleDateString()}`,
              }
            : currEle
        );
        setNoteList(updatedNoteList);
        setNote({})
      } else {
        let newDate = new Date();
        const newNote = {
          name: e.target.note.value,
          id: crypto.randomUUID(),
          date: `${newDate.toLocaleTimeString()} ${newDate.toLocaleDateString()}`,
        };
        setNoteList([...noteList, newNote]);
        setNote({})
      }
    }
  };

  return (
    <>
      <div className="add-note-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="note"
            placeholder="add note"
            value={note.name || ''}
            onChange={(e) => setNote({ ...note, name: e.target.value })}
          />
          <button type="submit">{note.id ? "Update" : "Add"}</button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
