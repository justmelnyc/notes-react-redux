import { colors } from '../colors';

export const CREATE_NOTE = 'CREATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const CHANGE_NOTE_COLOR = 'CHANGE_NOTE_COLOR';

export function createNote(html) {
	const noteData = {
		id: Math.round(Math.random() * 100000),
		html: html,
		backgroundColor: colors[0].hexVal,
		createdTime: new Date(),
		modifiedTime: new Date(),
	};
	return {
		type: CREATE_NOTE,
		payload: noteData
	};
}

export function editNote(noteData) {
	return {
		type: EDIT_NOTE,
		payload: noteData
	};
}

export function deleteNote(id) {
	return {
		type: DELETE_NOTE,
		payload: id
	};
}

export function changeNoteColor(id, hexCode) {
	return {
		type: CHANGE_NOTE_COLOR,
		payload: {id, hexCode}
	};
}