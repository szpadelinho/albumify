import React from 'react'

const Body = ({ album, tracks, borderColor }) => {
    const cover = album.data.coverArt.sources.sort((a, b) => b.height - a.height)[0].url;

    return (
        <div className="Body">
            <div className="Body_Content">
                <div className="Cover" style={{ borderColor: borderColor, transitionDuration: '.5s' }}>
                    <img src={cover} alt="Album Cover" />
                    <div className="artists">
                        {album.data.artists.items.map((artist, index) => (
                            <React.Fragment key={artist.uri}>
                                <h2>{artist.profile.name}</h2>
                                {index !== album.data.artists.items.length - 1 && <span>,</span>}
                            </React.Fragment>
                        ))}
                    </div>
                    <h3>{album.data.name}</h3>
                    <h4>{album.data.date.year}</h4>
                </div>
                <div className="Info">
                    <h2>Utwory</h2>
                    <ul>
                        {tracks.map((item, index) => (
                            <React.Fragment key={item.track.uri}>
                                {(index === 0 || item.track.discNumber !== tracks[index - 1].track.discNumber) && (
                                    <li id="album_disc_list">
                                        <p id="album_disc">Płyta</p><p id="album_disc_number">{item.track.discNumber}</p>
                                    </li>
                                )}
                                <li>
                                    <p id="track_id">{item.track.trackNumber}.</p>
                                    <p id="track_name">{item.track.name}</p>
                                    {item.track.artists.items.map((artist, artistIndex) => {
                                        const isAlbumArtist = album.data.artists.items.some(albumArtist => albumArtist.uri === artist.uri);
                                        if (!isAlbumArtist) {
                                            return (
                                                <React.Fragment key={artist.uri}>
                                                    <p id="track_artists">{artist.profile.name}</p>
                                                    {artistIndex !== item.track.artists.items.length - 1 && <span>,</span>}
                                                </React.Fragment>
                                            );
                                        }
                                        return null
                                    })}
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Body