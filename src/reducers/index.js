import {CREATE_NOTE} from '../actions/index';

export default function(state = [], action) {
	switch (action.type){
		case CREATE_NOTE:
			return [ action.payload,  ...state ];
	}
	return state;
}