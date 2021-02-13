import React from 'react';
import './CardList.css';

const CardList = (props) => {
  // console.log(props);
  return <div className='CardList'>{props.children}</div>;
};

export default CardList;
