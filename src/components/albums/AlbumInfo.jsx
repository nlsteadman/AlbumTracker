import React from 'react';

const AlbumInfo = () => {
    return <div>
        <img src={album.image} alt={album.album} />
        <h2>{album.artist}</h2> 
        <p>{album.album}</p>
        <p>{album.year}</p>
    </div>;
  };

export default AlbumInfo;