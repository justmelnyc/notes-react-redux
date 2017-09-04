import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeNoteColor } from '../actions/index';
import { colors } from '../colors';

class ColorSelector extends Component {
  constructor(props){
    super(props);

    this.state = {
      drawerOpen: false
    };

    this.renderColorButton = this.renderColorButton.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onToggleDrawer = this.onToggleDrawer.bind(this);
  }

  onSelect(e, hexVal) {
    e.preventDefault();
    this.props.changeNoteColor(this.props.noteId, hexVal);
    this.setState({drawerOpen: false});
  }

  onToggleDrawer(e) {
    e.preventDefault();
    this.setState({drawerOpen: !this.state.drawerOpen});
  }

  renderColorButton(color) {
    const isSelected = color.hexVal === this.props.selectedColor;
    return (
      <button 
        className={"color-selector-button " + (isSelected ? 'selected' : '')}
        key={color.hexVal}
        onMouseDown={ (e) => { this.onSelect(e, color.hexVal) } }
        style={{backgroundColor: color.hexVal}}>
      </button>
    );
  }

  render() {
    return (
      <div className="color-selector">
        <button 
          className="color-selector-toggle done-button"
          onMouseDown={ this.onToggleDrawer }>
          Color
        </button>
        <div 
          className={"color-selector-drawer " + (this.state.drawerOpen ? 'open' : 'closed') }>
          {colors.map( this.renderColorButton )}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeNoteColor}, dispatch);
}

export default connect(null, mapDispatchToProps)(ColorSelector);