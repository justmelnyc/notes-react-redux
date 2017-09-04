import {CREATE_NOTE, EDIT_NOTE, DELETE_NOTE, CHANGE_NOTE_COLOR} from '../actions/index';
import R from 'ramda';

export default function(state = [], action) {
	switch (action.type){
		case CREATE_NOTE:
			return [ action.payload,  ...state ];
		case EDIT_NOTE:
			return state.map( (note, index) => {
				if(note.id !== action.payload.id){
					return note;
				}
				else{
					return action.payload;
				}
			});
		case DELETE_NOTE:
			return R.remove(getNoteIndex(state, action.payload), 1, state);
		case CHANGE_NOTE_COLOR:
			return state.map( (note, index) => {
				if(note.id !== action.payload.id){
					return note;
				}
				else{
					return {
						...note,
						backgroundColor: action.payload.hexCode
					}
				}
			});
	}
	return state;
}