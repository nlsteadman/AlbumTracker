import React, { useState } from 'react';
import AlbumInfo from "./AlbumInfo";

const AlbumCard = ({ album, onDelete }) => {
  const [visibleDetails, setVisibleDetails] = useState(false);

  const handleClick = () => {
    setVisibleDetails(!visibleDetails)
  }

  const handleDelete = () => {
    onDelete(album.id);
  }

  return (
  <div key={album.id} id="album-info">
      <img onClick={handleClick} src={album.image} alt={album.album} />
      { visibleDetails ? <AlbumInfo album={album} /> : ""}
      <button onClick={handleDelete}>X</button>
  </div>
  )
};

export default AlbumCard;
