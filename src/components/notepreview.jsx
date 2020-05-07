import React, { useEffect, useState } from "react";

const NotePreview = ({ content, title }) => {
  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <p>{title}</p>
    </div>
  );
};

export default NotePreview;
