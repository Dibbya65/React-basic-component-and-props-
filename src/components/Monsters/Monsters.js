import React from 'react';
import Monster from './Monster/Monster';
import './Monsters.css';

const Monsters = (props) => {
  return (
    <div className='Monsters'>
      {props.monsters.map((monster) => (
        <Monster key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default Monsters;
