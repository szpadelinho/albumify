import './App.css'
const Body = ({album, tracks}) => {
    return(
        <div className="Body">
            <div className="Body_Content">
                <div className="Cover">
                    <img src={album.data.coverArt.sources[0].url}/>
                    <h2>{album.data.artists.items[0].profile.name}</h2>
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