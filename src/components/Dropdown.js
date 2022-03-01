import React, { useState } from 'react';

const Dropdown = ({ colors, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const optionsList = colors.map((color) => {
    if (color.value === selected.value) {
      return null;
    }

    return (
      <div
        key={color.value}
        className="item"
        onClick={() => {
          onSelectedChange(color);
        }}
      >
        <label>{color.label}</label>
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color:</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? 'active visible' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{optionsList}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
