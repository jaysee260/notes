import React from "react";

const NotePreview = ({ noteId, title, body }) =>
  <div id={noteId}>
    <h3>{title}</h3>
    <p>{body}</p>
  </div>

export default NotePreview;