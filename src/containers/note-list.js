import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteList extends Component { 
  renderNote(note) {
    return(
      <div className="note-creator">
        <div className="note-text-area" 
          dangerouslySetInnerHTML={{__html: note}} >
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="noteList">
        {this.props.notes.map(this.renderNote)}
      </div>
    );
  }
}

function mapStateToProps( notes ) {
  return { notes };
}

export default connect(mapStateToProps)(NoteList);