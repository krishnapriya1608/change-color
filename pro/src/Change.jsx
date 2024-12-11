import React, { useState } from 'react';


function Change() {
  const [color, setColor] = useState('#ffffff'); 

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  function handleclick() {
    const newColor = getRandomColor();
    setColor(newColor);
  }

  return (
    <div
      style={{
        backgroundColor: color,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}

export default Change;
