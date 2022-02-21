import React, { useEffect, useState } from 'react';
import Navbar from './components/navigation/Navbar';
import Home from './components/static/Home';
import ListAlbums from './components/albums/ListAlbums';
import NewAlbum from './components/albums/NewAlbum';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { baseUrl } from './components/Globals';

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [sortBy, setSortBy] = useState(false)
  
  useEffect(() => {
    fetch(baseUrl + '/albums')
      .then(r => r.json())
      .then(data => setAlbums(data))
  }, []);


  const addNewAlbum = (newAlbum) => {
    const updatedAlbums = [...albums, newAlbum]
    setAlbums(updatedAlbums)
  }

  const sortAlbums = (e) =>  {
    setSortBy(!sortBy)

    if (e.target.checked) {
      let sortedAlbums = albums.slice().sort((a, b) => {
        if(a.artist < b.artist) return -1
        if(a.artist > b.artist) return 1
        return 0
      })
      setAlbums(sortedAlbums)
    } else {
      setAlbums(albums)
    }
  }

  return (
    <Router>
      <Navbar onSort={sortAlbums}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<ListAlbums albums={albums} />} />
        <Route path="/albums/new" element={<NewAlbum addNewAlbum={addNewAlbum} />} />
      </Routes>
    </Router>
  );
}

export default App;
