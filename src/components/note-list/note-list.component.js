import React from 'react';
import { Note } from '..';

export const NoteListComponent = ({ notes }) => (
  <div className="noteList">
    {notes.map((noteData) => 
      <Note key={noteData.id} noteData={noteData} />
    )}
  </div>
);
