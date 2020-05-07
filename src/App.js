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

  const saveInput = (e, note) => {
    e.preventDefault();
    setTitle(note.title);
    setContent(note.content);
    setNoteList([...notelist, note]);
  };

  const addInput = (note) => {
    setTitle(note.title);
    setContent(note.content);
  };

  return (
    <div className="container row">
      <div className="App col-md-4">
        <NewNote />
        <NoteList notelist={notelist} />
      </div>
      <div className="App col-md-8">
        <NoteDisplay title={title} content={content} />
        <MarkDownInput handleChange={addInput} handleClick={saveInput} />
      </div>
    </div>
  );
};

export default App;
