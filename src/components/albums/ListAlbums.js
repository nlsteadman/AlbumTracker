import React from 'react';
import AlbumCard from './AlbumCard';

const ListAlbums = ({ albums, search }) => {

    const filteredAlbums = albums.filter((album) => {
        return album.artist.toLowerCase().includes(search.toLowerCase())
    })

    const albumCards = filteredAlbums.map(album => 
        <AlbumCard 
            key={ album.id } 
            album={ album }
        />
    );

  return (
  <div>
      <h1>My Albums</h1>
      <p>Click an image to see more information</p>
      <ul>
          { albumCards }
      </ul>
  </div>
  );
};

export default ListAlbums;
