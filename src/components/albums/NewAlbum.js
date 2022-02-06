import React, { useState } from 'react';
import { baseUrl, headers } from '../Globals';

const NewAlbum = ({ addNewAlbum }) => {
    const [state, setState] = useState(
        {
            "id": "",
            "artist": "",
            "album": "",
            "year": ""
        }
    )

    const handleChange = (e) => {
        setState({ ...state, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(baseUrl + "/albums", {
            method: "POST",
            headers,
            body: JSON.stringify(state)
        })
            .then(r => r.json())
            .then(data => addNewAlbum(state))
    }

  return <div>
      <h1>New Album</h1>
      <form onSubmit={handleSubmit}>
          <input value={state.artist} onChange={handleChange} type="text" name="artist" placeholder="Artist name" />
          <input value={state.album} onChange={handleChange} type="text" name="album" placeholder="Album name" />
          <input value={state.year} onChange={handleChange} type="text" name="year" placeholder="Year" />
          <button type="submit">Add Album</button>
      </form>
  </div>;
};

export default NewAlbum;
