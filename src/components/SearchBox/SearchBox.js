import React from 'react';
import './SearchBox.css';

const SearchBox = ({ type, placeholder, handleChange, name, id }) => {
  return (
    <input
      className='Search'
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
