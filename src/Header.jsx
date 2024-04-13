import './App.css'
const Header = () => {
    return(
        <div className="Header">
            <div className="Header_Content">
                <div className="Logo">
                    <h1>Albumify</h1>
                </div>
                <div className="Searchbar">
                    <input id="searchbar" type="text" placeholder="Wyszukaj tutaj albumu, singla, kompilacji lub EP'ki"/>
                </div>
            </div>
        </div>
    )
}

export default Header