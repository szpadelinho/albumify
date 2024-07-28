import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import React from 'react'
import { faEraser } from '@fortawesome/free-solid-svg-icons'

const Header = ({handleSearch, textColor, inputColor}) => {
    const handleChange = (event) => {
        handleSearch(event.target.value)
    }

    return (
        <div className="Header">
            <div className="Header_Content">
                <div onClick={() => {handleSearch("")}} className="Logo">
                    <h1 style={{color: textColor}}>Albumify</h1>
                </div>
                <div className="Searchbar">
                    <div className="Searchbar_div" style={{background: inputColor, transitionDuration: .5}}>
                        <input id="searchbar" type="text" placeholder="Wyszukaj tutaj albumu, singla, kompilacji lub EP'ki" onChange={handleChange}/>
                        {handleSearch.length > 0 && (<button onClick={()=>{handleSearch("")}}><FontAwesomeIcon icon={faEraser} size="xs"/></button>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header