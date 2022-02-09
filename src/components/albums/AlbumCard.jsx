import React from 'react';

const AlbumCard = ({ album }) => {
  return (
    <button>
        <div id="album-info">
          <img src={album.image} alt={album.album} />
          <h2>{album.artist}</h2> 
          <p>{album.album}</p>
          <p>{album.year}</p>
        </div>
    </button>
  )
};

export default AlbumCard;
