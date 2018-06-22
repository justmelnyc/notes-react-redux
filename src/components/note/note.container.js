import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withState, withHandlers } from 'recompose';
import * as handlers from './note.handlers';
import { editNote, deleteNote } from '../../actions/index';
import { NoteComponent } from './note.component';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editNote, deleteNote }, dispatch);
}

export const Note = compose(
  connect(null, mapDispatchToProps),
  withState('hasFocus', 'setFocus', false),
  withHandlers({
    onFocus: (props) => () => handlers.onFocus(props),
    onBlur: (props) => () => handlers.onBlur(props),
    onDelete: (props) => (e) => handlers.onDelete(e, props),
    onDone: (props) => (e) => handlers.onDone(e, props),
    onInputChange: (props) => (e) => handlers.onInputChange(e, props),
  })
)(NoteComponent);
