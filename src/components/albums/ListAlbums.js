import React, { useState } from 'react';
import AlbumCard from './AlbumCard';

const ListAlbums = ({ albums }) => {
    const [selectedAlbum, setSelectedAlbum] = useState(null);

    const selectAlbum = albums.find(album => album.id == selectedAlbum);

    const handleClick = (e) => {
        setSelectedAlbum(e.target.value);
    }

    const albumCards = albums.map(album => 
        <AlbumCard 
            key={ album.id } 
            album={ album }
            onClick={ handleClick } 
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
