const Search = ({searchResult, onAlbumClick}) => {
    return(
        <div className="Search">
            <div className="Search_Content">
                <ul>
                    {console.log(searchResult)}
                    {
                        searchResult.map((item, index) => (
                            <li key={index} onClick={() => onAlbumClick(item)}>
                                <div id="list_cover">
                                    <img src={item.data.coverArt.sources[0].url}/>
                                </div>
                                <div id="list_info">
                                    <p>{item.data.artists.items[0].profile.name}</p>
                                    <p>{item.data.name}</p>
                                    <p>{item.data.date.year}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Search