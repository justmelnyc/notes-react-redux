import React, { Component } from 'react';
import { colors } from '../../colors';

const renderColorButton = (color, selectedColor, onSelect) => {
  const isSelected = color.hexVal === selectedColor;
  return (
    <button
      className={"color-selector-button " + (isSelected ? 'selected' : '')}
      key={color.hexVal}
      onMouseDown={(e) => { onSelect(e, color.hexVal) }}
      style={{ backgroundColor: color.hexVal }}>
    </button>
  );
};

export const ColorSelectorComponent = ({
  drawerOpen,
  selectedColor,
  onToggleDrawer,
  onSelect,
}) => (
  <div className="color-selector">
    <button
      className="color-selector-toggle done-button"
      onMouseDown={onToggleDrawer}>
      Color
        </button>
    <div className={"color-selector-drawer " + (drawerOpen ? 'open' : 'closed')}>
      {colors.map(color => renderColorButton(color, selectedColor, onSelect))}
    </div>
  </div>
);
