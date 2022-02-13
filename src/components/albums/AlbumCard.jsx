import React from 'react';

const AlbumCard = ({ album, onClick }) => {
    if ( album ) {
      return (
      <div id="album-info">
        <button>
          <img src={album.image} alt={album.album} />
      </button>
    </div>
      )
    }
    else {
      return <div>Loading...</div>
    }
};

export default AlbumCard;
