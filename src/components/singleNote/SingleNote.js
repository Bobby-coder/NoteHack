const SingleNote = ({
  name,
  id,
  date,
  note,
  setNote,
  noteList,
  setNoteList,
}) => {
  const handleEdit = () => {
    let selectedNote = noteList.find((currEle) => currEle.id === id);
    setNote(selectedNote);
  };

  const handleDelete = () => {
    let updatedNoteList = noteList.filter((currEle) => currEle.id !== id);
    setNoteList(updatedNoteList);
  };
  return (
    <>
      <div className="singlenote-container">
        <p>
          <span className="name">{name}</span>
          <span className="date">{date}</span>
        </p>
        <div>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default SingleNote;
