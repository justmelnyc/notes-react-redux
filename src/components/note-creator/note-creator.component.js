import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

export const NoteCreatorComponent = ({
  noteContents,
  onInputChange,
  onDone,
}) => (
  <div className="note-creator">
    <ContentEditable
      className="note-text-area"
      html={noteContents}
      onChange={onInputChange}
    />
    {noteContents === '' &&
      <div className="note-placeholder">New note...</div>
    }
    {noteContents !== '' &&
      <div className="note-controls">
        <button className="done-button"
          type="button"
          onClick={onDone}>Done</button>
      </div>
    }
  </div>
);
