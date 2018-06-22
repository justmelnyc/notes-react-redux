export const onInputChange = (e, { setNoteContents }) => {
  setNoteContents(e.target.value);
};

export const onDone = ({ createNote, setNoteContents, noteContents }) => {
  createNote(noteContents);
  setNoteContents('');
};
