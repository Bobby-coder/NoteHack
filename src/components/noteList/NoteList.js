import SingleNote from "../singleNote/SingleNote";

const NoteList = ({ note, noteList, setNote, setNoteList }) => {
  const handleClear = () => {
    setNoteList([]);
  };

  return (
    <>
      <div className="notelist-container">
        <div className="notelist-header">
          <div>
            <span className="title">Notes</span>
            <span className="count">{noteList.length}</span>
          </div>
          <div className="clear-all">
            <button onClick={handleClear}>Clear All</button>
          </div>
        </div>
        <div className="notelist-section">
          {noteList.map(({ name, id, date }) => (
            <SingleNote name={name} key={id} id={id} date={date} noteList={noteList} note={note} setNote={setNote} setNoteList={setNoteList} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NoteList;
