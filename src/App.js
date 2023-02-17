import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import AddNote from "./components/addNote/AddNote";
import NoteList from "./components/noteList/NoteList";
import "./App.css";

function App() {
  const [noteList, setNoteList] = useState(
    JSON.parse(localStorage.getItem("noteList")) || []
  );
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || "gradient-one");
  const [note, setNote] = useState({});
  useEffect(
    () => localStorage.setItem("noteList", JSON.stringify(noteList)),
    [noteList]
  );
  useEffect(
    () => localStorage.setItem('theme', JSON.stringify(theme)),
    [theme]
  )
  return (
    <>
      <div className={theme}>
        <div className="container">
          <Header 
            theme={theme} 
            setTheme={setTheme} 
          />
          <AddNote
            note={note}
            noteList={noteList}
            setNote={setNote}
            setNoteList={setNoteList}
          />
          <NoteList
            note={note}
            noteList={noteList}
            setNote={setNote}
            setNoteList={setNoteList}
          />
        </div>
      </div>
    </>
  );
}

export default App;
