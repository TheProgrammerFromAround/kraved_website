import './header.css';
import { useLocation, useNavigate } from "react-router-dom"; 
import SearchBar from './SearchBar';

export default function Header() {

    const location = useLocation();
    const navigate = useNavigate();

    function handleButtonClick(path) {
        if (location.pathname !== path) {
        // You are on a different page → just navigate
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
        // Same page → just scroll
        window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }


    return(
                <header className='header'>
            <div className="headerDesign">

                {/* <div className="ham-menu">
                    <span id="ham1"></span>
                    <span id="ham2"></span>
                    <span id="ham3"></span>
                </div> */}
                
                <SearchBar />


                <div style={{ visibility: 'hidden'}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="search-icon"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>

                <h1 id = "mainHeading">Krave'd</h1>
                <div className="Cart" onClick={() => handleButtonClick("/cart")}>Cart</div>
            </div>

            <div id="menu">
                <button className='menuButtons' onClick={() => handleButtonClick("/")}>Home</button>
                <button className='menuButtons' onClick={() => handleButtonClick("/about")}>About</button>
                <button className='menuButtons' onClick={() => handleButtonClick("/shop")}>Shop</button>
                <button className='menuButtons' onClick={() => handleButtonClick("/contact")}>Contact</button>
            </div>

        </header>
    )
}