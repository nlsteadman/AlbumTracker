import React from 'react';

const AlbumInfo = ({ album }) => {
    return (
    <div>
        <h2>{album.artist}</h2> 
        <p>{album.album}</p>
        <p>{album.year}</p>
    </div>
    )
  };

export default AlbumInfo;