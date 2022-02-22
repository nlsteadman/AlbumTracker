import React, { useState } from 'react';
import AlbumInfo from "./AlbumInfo";

const AlbumCard = ({ album }) => {
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setVisibleDetails(!visibleDetails)
  }

  return (
  <div key={album.id} id="album-info">
      <img onClick={handleClick} src={album.image} alt={album.album} />
      { visibleDetails ? <AlbumInfo album={album} /> : ""}
      <div>
        {isFavorited ? (
          <button
            onClick={() => setIsFavorited(false)}
          >
            ❤️
          </button>
        ) : (
          <button
            onClick={() => setIsFavorited(true)}
          >
            ♡
          </button>
        )}
      </div>
  </div>
  )
};

export default AlbumCard;
