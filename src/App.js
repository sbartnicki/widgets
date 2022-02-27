import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {<Search />}
    </div>
  );
};
