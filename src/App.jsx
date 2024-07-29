import './App.css'
import { useState, useEffect } from 'react'
import View from './View.jsx'
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"
import Search from "./Search.jsx"
import ColorThief from 'color-thief'

function App() {

  const colorThief = new ColorThief();

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
  const [bgColor, setBgColor] = useState("#431D30")
  const [textColor, setTextColor] = useState("#F84AA7")
  const [inputColor, setInputColor] = useState("#431D30")
  const [borderColor, setBorderColor] = useState("#1F1F1D")

  useEffect(() => {
    if (searchQuery.trim().length !== 0) {
      const timer = setTimeout(() => {
        const requestApi = (query) => {
          fetch(`https://spotify23.p.rapidapi.com/search/?q=${query}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
            .then(res => res.json())
            .then(res => {
              console.log(res.albums.items)
              setSearchResult(res.albums.items)
              setVisibleSearch(true)
              setVisibleBody(false)
            })
            .catch(err => console.error(err))
        }
        requestApi(searchQuery)
      }, 500)

      setBgColor("#431D30")
      setTextColor("#F84AA7")
      setInputColor("#431D30")
      setBorderColor("#1F1F1D")

      return () => clearTimeout(timer)
    } else {
      setVisibleSearch(false)
      setVisibleBody(false)
      setBgColor("#431D30")
      setTextColor("#F84AA7")
      setInputColor("#431D30")
      setBorderColor("#1F1F1D")
    }
  }, [searchQuery])

  const requestApi2 = (uri) => {
    fetch(`https://spotify81.p.rapidapi.com/album_tracks?id=${uri}&offset=0&limit=300`, options2)
      .then(response => response.json())
      .then(response => {
        setAlbumTracks(response.data.album.tracks.items)
        console.log(response.data.album.tracks.items)
        setVisibleBody(true)
      })
      .catch(err => console.error(err))
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  };

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album)
    setVisibleSearch(false)

    const uri = album.data.uri.split(":").pop()
    requestApi2(uri)
  }

  const rgbToHex = (color) => {
    const [r, g, b] = color;
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }).join('')
  }

  const getImage = (img) => {
    const color = colorThief.getColor(img)
    const hexColor = rgbToHex(color)
    setBgColor(hexColor)
    setTextColor(hexColor)
    setInputColor(hexColor)
    setBorderColor(hexColor)
  }

  return (
    <View bgColor={bgColor}>
      <Header handleSearch={handleSearch} textColor={textColor} inputColor={inputColor}/>
      {isVisibleBody && <Body album={selectedAlbum} tracks={albumTracks} borderColor={borderColor}/>}
      {isVisibleSearch && <Search searchResult={searchResult} onAlbumClick={handleAlbumClick} getImage={getImage} />}
      {/* <Footer textColor={textColor}/> */}
    </View>
  )
}

export default App