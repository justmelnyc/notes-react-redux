export const onSelect = (e, hexVal, { setDrawerOpen, changeNoteColor, noteId }) => {
  e.preventDefault();
  changeNoteColor(noteId, hexVal);
  setDrawerOpen(false);
};

export const onToggleDrawer = (e, { setDrawerOpen, drawerOpen }) => {
  e.preventDefault();
  setDrawerOpen(!drawerOpen);
};
