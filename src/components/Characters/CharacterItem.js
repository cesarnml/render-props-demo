import React from 'react';

const CharacterItem = ({ name, description }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default CharacterItem;
