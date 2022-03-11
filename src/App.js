import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React',
    content: 'Front end JS Framework lorem lorem loerm szakalaka',
  },
  {
    title: 'Why use React?',
    content: 'Why not to use it? Its the best and it will help more than not',
  },
  {
    title: 'What is competition',
    content: "Competition is smoked, doesn't really matter",
  },
];

const colors = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
  {
    label: 'Green',
    value: 'green',
  },
];

export default () => {
  const [selected, setSelected] = useState(colors[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* {<Search />} */}
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle button</button>
      {showDropdown ? (
        <Dropdown selected={selected} onSelectedChange={setSelected} colors={colors} />
      ) : null}
    </div>
  );
};
