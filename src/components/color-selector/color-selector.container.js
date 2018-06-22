import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withState, withHandlers } from 'recompose';
import * as handlers from './color-selector.handlers';
import { changeNoteColor } from '../../actions/index';
import { ColorSelectorComponent } from './color-selector.component';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeNoteColor }, dispatch);
}

export const ColorSelector = compose(
  connect(null, mapDispatchToProps),
  withState('drawerOpen', 'setDrawerOpen', false),
  withHandlers({
    onSelect: (props) => (e, hexVal) => handlers.onSelect(e, hexVal, props),
    onToggleDrawer: (props) => (e) => handlers.onToggleDrawer(e, props),
  })
)(ColorSelectorComponent);