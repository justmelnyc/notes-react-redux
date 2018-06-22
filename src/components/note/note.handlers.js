export const onFocus = ({ setFocus }) => {
  setFocus(true);
};

export const onBlur = ({ setFocus, editNote, noteData }) => {
  setFocus(false);
  editNote(noteData);
};

export const onInputChange = (e, { editNote, noteData }) => {
  const newNoteData = { noteData };
  newNoteData.modifiedTime = new Date();
  newNoteData.html = e.target.value;
  editNote(newNoteData);
};

export const onDelete = (e, { setFocus, noteData }) => {
  e.preventDefault();
  setFocus(false);
  deleteNote(noteData.id);
};

export const onDone = (e, { setFocus, editNote, noteData }) => {
  e.preventDefault();
  setFocus(false);
  editNote(noteData);
};
