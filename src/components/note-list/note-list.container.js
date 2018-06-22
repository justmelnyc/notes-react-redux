import { connect } from 'react-redux';
import { NoteListComponent } from './note-list.component';

function mapStateToProps(state) {
  return { notes: state };
}

export const NoteList = connect(mapStateToProps)(NoteListComponent);
