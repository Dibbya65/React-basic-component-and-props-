import React from 'react';
import './Monster.css';

const Monster = (props) => {
  return (
    <div className='Monster'>
      <img
        src={`https://robohash.org/${props.monster.id}`}
        alt='monster'
        width='100%'
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Monster;
