import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editNote, deleteNote } from '../actions/index';
import R from 'ramda';

import ContentEditable from 'react-contenteditable';
import ColorSelector from './color-selector';

class Note extends Component {
  constructor(props){
    super(props);

    this.state = {
      hasFocus: false
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFocus() {
    this.setState({hasFocus: true});
  }

  onBlur() {
    this.setState({hasFocus: false});
    this.props.editNote(this.props.noteData);
  }

  onInputChange(e) {
    let noteData = {...this.props.noteData};
    noteData.modifiedTime = new Date();
    noteData.html = e.target.value;
    this.setState({noteData: noteData});
    this.props.editNote(this.props.noteData);
  }

  onDelete(e) {
    e.preventDefault();
    this.setState({hasFocus: false});
    this.props.deleteNote(this.props.noteData.id);
  }

  onDone(e) {
    e.preventDefault();
    this.setState({hasFocus: false});
    this.props.editNote(this.props.noteData);
  }

  render() {
    return (
      <div 
        className="note" 
        onBlur={this.onBlur}
        style={{backgroundColor: this.props.noteData.backgroundColor}}
      >
        <ContentEditable 
          className="note-text-area"
          html={this.props.noteData.html}
          onChange={this.onInputChange}
          onFocus={this.onFocus}
        />
        <div className="note-last-edited">Last edited: {this.props.noteData.modifiedTime.toLocaleDateString()} at {this.props.noteData.modifiedTime.toLocaleTimeString()}</div>
        {this.state.hasFocus &&
          <div className="note-controls">
            <ColorSelector
              noteId={this.props.noteData.id}
              selectedColor={this.props.noteData.backgroundColor} />
            <button className="done-button"
              type="button"
              onMouseDown={this.onDelete}>Delete</button>
            <button className="done-button"
              type="button"
              onMouseDown={this.onDone}>Done</button>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps( state, ownProps ) {
  const noteData = R.find(R.propEq('id', ownProps.id))(state);
  return { noteData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({editNote, deleteNote}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);