import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Container>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Button color="inherit" component={ Link } to="/">Album Tracker</Button>
            </Typography>
            <Button color="inherit" component={ Link } to="/albums">List Albums</Button>
            <Button color="inherit" component={ Link } to="/albums/new">Create Albums</Button>
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;