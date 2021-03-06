import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, colors, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true });
    };
  }, []);

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
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
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
