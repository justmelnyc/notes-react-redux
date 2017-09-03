import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContentEditable from 'react-contenteditable';
import { createNote } from '../actions/index';

class NoteCreator extends Component {
  constructor(props){
    super(props);

    this.state = {
      noteContents: ''
    };

    this.onDone = this.onDone.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({noteContents: e.target.value});
  }

  onDone(e) {
    this.props.createNote(this.state.noteContents);
    this.setState({noteContents: ''});
  }

  render() {
    return (
      <div className="note-creator">
        <ContentEditable 
          className="note-text-area"
          html={this.state.noteContents}
          onChange={this.onInputChange}
        />
        {this.state.noteContents === '' &&
          <div className="note-placeholder">New note...</div>
        }
        {this.state.noteContents !== '' &&
          <button className="done-button"
            type="button"
            onClick={this.onDone}>Done</button>
        }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createNote}, dispatch);
}

export default connect(null, mapDispatchToProps)(NoteCreator);