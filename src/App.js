import React, { useEffect, useState } from 'react';
import Navbar from './components/navigation/Navbar';
import Home from './components/static/Home';
import ListAlbums from './components/albums/ListAlbums';
import NewAlbum from './components/albums/NewAlbum';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { baseUrl } from './components/Globals';

const App = () => {
  const [albums, setAlbums] = useState([]);
  
  useEffect(() => {
    fetch(baseUrl + '/albums')
      .then(r => r.json())
      .then(data => setAlbums(data))
  }, []);


  const addNewAlbum = (newAlbum) => {
    const updatedAlbums = [...albums, newAlbum]
    setAlbums(updatedAlbums)
  }

  const deleteAlbum = (id) => {
    const updatedAlbumArray = albums.filter((album) => album.id !== id)
    setAlbums(updatedAlbumArray);
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<ListAlbums albums={albums} onDelete={deleteAlbum} />} />
        <Route path="/albums/new" element={<NewAlbum addNewAlbum={addNewAlbum} />} />
      </Routes>
    </Router>
  );
}

export default App;
