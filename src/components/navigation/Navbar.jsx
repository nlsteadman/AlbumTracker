import React, { useState } from 'react';
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

const Navbar = ({ sortBy, onChangeSort }) => {
  const [sortOn, setSortOn] = useState("false");
  const classes = useStyles();

  const handleSort = (e) => {
    onChangeSort(e.target.value)
  }

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
            <p>Sort:</p>
            <label>
              <input
                type="radio"
                value="Alphabetically"
                name="sort"
                checked={sortBy === "Alphabetically"}
                onChange={handleSort}
              />
            Alphabetically
            </label>
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;