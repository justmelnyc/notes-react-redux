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
      hasFocus: false,
      dragging: false,
      offset: [0,0],
      dragOrigin: [0,0],
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onDrag);
    window.addEventListener('mouseup', this.onDragEnd);
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

  onDragStart(e) {
    this.setState(
      {
        dragging: true,
        offset: [0,0],
        dragOrigin: [e.clientX, e.clientY],
      }
    );
  }

  onDrag(e) {
    if(this.state.dragging){
      this.setState(
        {
          offset: [
            e.clientX - this.state.dragOrigin[0],
            e.clientY - this.state.dragOrigin[1]
          ]
        }
      );
    }
  }

  onDragEnd(e) {
    this.setState(
      {
        dragging: false,
        offset: [0,0],
        dragOrigin: [0,0],
      }
    );
  }

  render() {
    return (
      <div 
        className={"note " + ( this.state.hasFocus ? 'focussed' : '' ) }
        onBlur={this.onBlur}
        style={
          {
            backgroundColor: this.props.noteData.backgroundColor,
            transform: `translate( ${this.state.offset[0]}px, ${this.state.offset[1]}px)`
          }
        }
      >
        <div className="note-header" onMouseDown={ this.onDragStart } />
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