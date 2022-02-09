import React, { useEffect, useState } from 'react';
import Navbar from './components/navigation/Navbar';
import Home from './components/static/Home';
import ListAlbums from './components/albums/ListAlbums';
import NewAlbum from './components/albums/NewAlbum';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { baseUrl } from './components/Globals';

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(baseUrl + '/albums')
      const data = await response.json();
      setAlbums(data);
    }

    fetchAlbums();
  }, []);

  const selectAlbum = albums.find(album => album.id == selectedAlbum);

  const addNewAlbum = (newAlbum) => {
    const updatedAlbums = [...albums, newAlbum]
    setAlbums(updatedAlbums)
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<ListAlbums albums={albums} onClickAlbum={setSelectedAlbum} selectAlbum={selectAlbum} />} />
        <Route path="/albums/new" element={<NewAlbum addNewAlbum={addNewAlbum} />} />
      </Routes>
    </Router>
  );
}

export default App;
