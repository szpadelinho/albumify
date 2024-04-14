import './App.css'
import React from 'react'

const Header = ({handleSearch}) => {
    const handleChange = (event) => {
        handleSearch(event.target.value);
    };

    return (
        <div className="Header">
            <div className="Header_Content">
                <div className="Logo">
                    <h1>Albumify</h1>
                </div>
                <div className="Searchbar">
                    <input id="searchbar" type="text" placeholder="Wyszukaj tutaj albumu, singla, kompilacji lub EP'ki" onChange={handleChange}/>
                </div>
            </div>
        </div>
    )
}

export default Header