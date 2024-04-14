import './App.css'
import { useState, useEffect } from 'react'
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"
import Search from "./Search.jsx"

function App() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7cc17d8686mshe7afd37767dbe9ep164a54jsn10d414d47948',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  const options2 = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '96f706b75cmsh48a020b5ae3b47ap112566jsn446caa08d3fd',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  }

    const [searchResult, setSearchResult] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isVisibleBody, setVisibleBody] = useState(false)
    const [isVisibleSearch, setVisibleSearch] = useState(false)
    const [selectedAlbum, setSelectedAlbum] = useState(null)
    const [albumTracks, setAlbumTracks] = useState(null);

    const requestApi = (query) => {
        fetch(`https://spotify23.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
        .then(res => res.json())
        .then(res => {
            setSearchResult(res.albums.items);
            setVisibleSearch(true);
            setVisibleBody(false)
        })
        .catch(err => console.error(err));
    }

    const requestApi2 = (uri) => {
      fetch(`https://spotify23.p.rapidapi.com/album_tracks/?id=${uri}&offset=0&limit=300`, options2)
        .then(response => response.json())
        .then(response => {
            setAlbumTracks(response);
        })
        .catch(err => console.error(err));
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleAlbumClick = (album) => {
      setSelectedAlbum(album);
      setVisibleSearch(false)
      setVisibleBody(true)

      const uri = album.data.uri.split(":").pop()
      requestApi2(uri)
    }

    useEffect(() => {
        if (searchQuery.trim().length !== 0) {
            requestApi(searchQuery);
        }
        else{
          setVisibleSearch(false);
          setVisibleBody(false)
        }
    }, [searchQuery]);

  return (
    <main>
      <Header handleSearch={handleSearch}/>
      {isVisibleBody && <Body album={selectedAlbum} tracks={albumTracks}/>}
      {isVisibleSearch && <Search searchResult={searchResult} onAlbumClick={handleAlbumClick}/>}
      <Footer/>
    </main>
  )
}

export default App