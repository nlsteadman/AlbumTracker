import React from 'react';
import AlbumCard from './AlbumCard';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const ListAlbums = ({ albums }) => {
    const classes = useStyles();

    const albumCards = albums.map(album => <AlbumCard key={ album.id } album={ album } />)
  return <div>
      <h1>List Albums</h1>
      <List component="nav" aria-label="secondary mailbox folders">
          { albumCards }
      </List>
  </div>;
};

export default ListAlbums;
