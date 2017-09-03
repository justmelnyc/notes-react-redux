export const CREATE_NOTE = 'CREATE_NOTE';

export function createNote(noteContents) {
	return {
		type: CREATE_NOTE,
		payload: noteContents
	};
}