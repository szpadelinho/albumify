import './App.css'
import React from 'react';

const Body = ({album, tracks}) => {
    return(
        <div className="Body">
            <div className="Body_Content">
                <div className="Cover">
                    <img src={album.data.coverArt.sources[0].url}/>
                    <div className="artists">
                        {
                            album.data.artists.items.map((artist, index) => {
                                return(
                                    <React.Fragment key={artist.uri}>
                                        <h2>{artist.profile.name}</h2>
                                        {index !== album.data.artists.items.length - 1 && <span>,</span>}
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                    <h3>{album.data.name}</h3>
                    <h4>{album.data.date.year}</h4>
                </div>
                <div className="Info">
                    <h2>Utwory</h2>
                    <ul>
                        {console.log(tracks)}
                        {
                            tracks.map(item => (
                                <li>
                                    <p id="track_id">{item.track.trackNumber}.</p>
                                    <p id="track_name">{item.track.name}</p>
                                    {
                                        item.track.artists.items.map((artist, index) => (
                                            <React.Fragment key={artist.uri}>
                                                <p id="track_artists">{artist.profile.name}</p>
                                                {index !== item.track.artists.items.length - 1 && <span>,</span>}
                                            </React.Fragment>
                                        ))
                                    }

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Body