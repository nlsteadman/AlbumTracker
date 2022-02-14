import React from 'react';
import AlbumCard from './AlbumCard';

const ListAlbums = ({ albums }) => {

    const albumCards = albums.map(album => 
        <AlbumCard 
            key={ album.id } 
            album={ album }
        />
    );

  return (
  <div>
      <h1>My Albums</h1>
      <ul>
          { albumCards }
      </ul>
  </div>
  );
};

export default ListAlbums;
