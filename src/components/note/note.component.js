import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import { ColorSelector } from '..';

export const NoteComponent = ({
  noteData,
  hasFocus,
  onFocus,
  onBlur,
  onInputChange,
  onDelete,
  onDone,
}) => (
  <div
    className={"note " + (hasFocus ? 'focussed' : '')}
    onBlur={onBlur}
    style={{ backgroundColor: noteData.backgroundColor }}
  >
    <div className="note-header" />
    <ContentEditable
      className="note-text-area"
      html={noteData.html}
      onChange={onInputChange}
      onFocus={onFocus}
    />
    <div className="note-last-edited">Last edited: {noteData.modifiedTime.toLocaleDateString()} at {noteData.modifiedTime.toLocaleTimeString()}</div>
    {hasFocus &&
      <div className="note-controls">
        <ColorSelector
          noteId={noteData.id}
          selectedColor={noteData.backgroundColor} />
        <button className="done-button"
          type="button"
          onMouseDown={onDelete}>Delete</button>
        <button className="done-button"
          type="button"
          onMouseDown={onDone}>Done</button>
      </div>
    }
  </div>
);
