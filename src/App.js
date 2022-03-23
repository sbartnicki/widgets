import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          colors={colors}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
};
