import React from 'react';
import AlbumCard from './AlbumCard';

const ListAlbums = ({ albums, onClickAlbum, selectAlbum }) => {
    const albumCards = albums.map(album => 
        <AlbumCard 
            key={ album.id }
            onClick={() => onClickAlbum(album.id)} 
            album={ selectAlbum } 
        >
          { album.artist}
        </AlbumCard>
    );

  return (
  <div>
      <h1>List Albums</h1>
      <ul>
          { albumCards }
      </ul>
  </div>
  );
};

export default ListAlbums;
