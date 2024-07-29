import React, { useRef, useState, useEffect } from 'react'

const Body = ({ album, tracks, borderColor }) => {
    const cover = album.data.coverArt.sources.sort((a, b) => b.height - a.height)[0].url

    const nameRef = useRef([])
    const itemRef = useRef([])

    const [nameSize, setNameSize] = useState([])
    const [itemSize, setItemSize] = useState([])

    useEffect(() => {
        setNameSize(nameRef.current.map(ref => ref.offsetWidth))
        setItemSize(itemRef.current.map(ref => ref.offsetWidth))
    }, [tracks])

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
                                    <li className="sticky_disc_number" id="album_disc_list">
                                        <div className="sticky_disc_div">
                                            <p id="album_disc">Płyta</p><p id="album_disc_number">{item.track.discNumber}</p>
                                        </div>
                                    </li>
                                )}
                                <li ref={el => itemRef.current[index] = el}>
                                    <p id="track_id">{item.track.trackNumber}.</p>
                                    {
                                        nameSize[index] > itemSize[index] ? (
                                            <div className="marquee-container">
                                                <div ref={el => nameRef.current[index] = el} className="marquee-content">
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
                                                </div>
                                            </div>
                                        ) : (
                                            <div ref={el => nameRef.current[index] = el} className="name_div">
                                                <p id="track_name">{item.track.name}</p>
                                                {item.track.artists.items.map((artist, artistIndex) => {
                                                    const isAlbumArtist = album.data.artists.items.some(albumArtist => albumArtist.uri === artist.uri);
                                                    if (!isAlbumArtist) {
                                                        return (
                                                            <React.Fragment key={artist.uri}>
                                                                <p id="track_artists">{artist.profile.name}</p>
                                                                {artistIndex !== item.track.artists.items.length - 1 && <span>,</span>}
                                                            </React.Fragment>
                                                        )
                                                    }
                                                    return null
                                                })}
                                            </div>
                                        )
                                    }
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Body