import React from 'react';

const Search = ({searchResult, onAlbumClick, getImage}) => {
    const handleAlbumClick = (item) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            getImage(img);
            onAlbumClick(item);
        };
        img.src = item.data.coverArt.sources[0].url;
    }

    return(
        <div className="Search">
            <div className="Search_Content">
                <ul>
                    {searchResult && searchResult.map((item, index) => (
                        <li key={index} onClick={() => handleAlbumClick(item)}>
                            <div id="list_cover">
                                <img src={item.data.coverArt.sources[0].url} />
                            </div>
                            <div id="list_info">
                                <div className="artists">
                                    {
                                        item.data.artists.items.map((artist, index) => {
                                            return(
                                                <React.Fragment key={artist.uid}>
                                                    <p id="artist_name">{artist.profile.name}</p>
                                                    {index !== item.data.artists.items.length - 1 && <span id="span2">,</span>}
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                                <p id="album_name">{item.data.name}</p>
                                <p id="album_year">{item.data.date.year}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Search