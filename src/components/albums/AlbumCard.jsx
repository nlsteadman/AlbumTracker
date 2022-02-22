import React, { useState } from 'react';
import AlbumInfo from "./AlbumInfo";

const AlbumCard = ({ album }) => {
  const [visibleDetails, setVisibleDetails] = useState(false);

  const handleClick = () => {
    setVisibleDetails(!visibleDetails)
  }

  return (
  <div key={album.id} id="album-info">
      <img onClick={handleClick} src={album.image} alt={album.album} />
      { visibleDetails ? <AlbumInfo album={album} /> : ""}
  </div>
  )
};

export default AlbumCard;
