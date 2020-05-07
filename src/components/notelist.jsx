import React, { useEffect, useState } from "react";
import NotePreview from "./notepreview";

const NoteList = ({ notelist }) => {
  console.log("je suis dans mon notelist", notelist);
  notelist.map((list) => console.log("hey"));
  return (
    <>
      <div>
        {notelist.map((note, index) => (
          <NotePreview key={index} content={note.content} title={note.title} />
        ))}
      </div>
    </>
  );
};

export default NoteList;
