import React, { useState } from 'react';
import AlbumInfo from "./AlbumInfo";

const AlbumCard = ({ album }) => {
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setVisibleDetails(!visibleDetails)
  }

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
  <div key={album.id} id="album-info">
      <img onClick={handleClick} src={album.image} alt={album.album} />
      { visibleDetails ? <AlbumInfo album={album} /> : ""}
      <button onClick={increment}>
      👍
      </button>
      {counter}
      <button onClick={decrement}>
      👎
      </button>
  </div>
  )
};

export default AlbumCard;
