import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withState, withHandlers } from 'recompose';
import * as handlers from './note-creator.handlers';
import { NoteCreatorComponent } from './note-creator.component';
import { createNote } from '../../actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createNote }, dispatch);
}

export const NoteCreator = compose(
  connect(null, mapDispatchToProps),
  withState('noteContents', 'setNoteContents', ''),
  withHandlers({
    onInputChange: (props) => (e) => handlers.onInputChange(e, props),
    onDone: (props) => () => handlers.onDone(props),
  }),
)(NoteCreatorComponent);
