import './App.css'
const Footer = ({textColor}) => {
    return(
        <div className="Footer">
            <div className="Footer_Content">
                <h4 style={{color: textColor}}>Albumify © 2024</h4>
            </div>
        </div>
    )
}

export default Footer