import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const AlbumCard = ({ album }) => {
  return (
    <ListItem button>
        <ListItemText primary={ album.artist } />
    </ListItem>
  )
};

export default AlbumCard;
