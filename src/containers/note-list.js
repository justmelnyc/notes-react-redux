import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './note';

class NoteList extends Component { 
  render() {
    return (
      <div className="noteList">
        {this.props.notes.map( (noteData) => <Note key={noteData.id} id={noteData.id}></Note> )}
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return { notes: state };
}

export default connect(mapStateToProps)(NoteList);