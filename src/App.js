import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MarkDownInput from "./components/markdowninput";
import NoteDisplay from "./components/notedisplay";
import NoteList from "./components/notelist";
import NewNote from "./components/newnote";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notelist, setNoteList] = useState([]);
  const [type, setType] = useState("new");
  const [currentId, setCurrentId] = useState("");
  const [noteId, setNoteId] = useState(0);

  const saveInput = (e, note) => {
    e.preventDefault();
    setTitle(note.title);
    setContent(note.content);

    if (type === "new") {
      setNoteId(noteId + 1);
      note["id"] = noteId;

      setNoteList([...notelist, note]);
      setCurrentId(noteId);
    } else {
      let noteIndex = notelist.findIndex((note) => note.id === currentId);
      notelist[noteIndex].content = note.content;
      notelist[noteIndex].title = note.title;
      setNoteList([...notelist]);
    }

    setType("edit");
  };

  const addInput = (note) => {
    setTitle(note.title);
    setContent(note.content);
  };

  const newForm = () => {
    setTitle("");
    setContent("");
    setType("new");
  };

  const displayNote = (e, id, title, content) => {
    console.log(e, id, title, content);
    setTitle(title);
    setContent(content);
    setType("edit");
    setCurrentId(id);
  };

  return (
    <div className="mt-5 container row">
      <div className="App col-md-4">
        <NewNote handleClick={newForm} />
        <NoteList handleClickPreview={displayNote} notelist={notelist} />
      </div>
      <div className="App col-md-8">
        <NoteDisplay title={title} content={content} />
        <MarkDownInput
          type={type}
          defTitle={title}
          defContent={content}
          handleChange={addInput}
          handleClick={saveInput}
        />
      </div>
    </div>
  );
};

export default App;
