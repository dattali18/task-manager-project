import logo_w from "../src/assets/logo-w.svg"
import logo_b from "../src/assets/logo-b.svg"
import moon from "../src/assets/moon.svg"
import sun from "../src/assets/sun.svg"

import './App.css'
import {useState} from "react";

function App() {
    // eslint-disable-next-line no-unused-vars
    const [darkMode, setDarkMode] = useState(false)

    return (
        <>
            <div className={darkMode ? "dark" : "light"}>
                <nav className="nav">
                    <div className="nav-logo">
                        <img src={darkMode ? logo_w : logo_b} alt="logo"/>
                        <a href="#" className="nav-logo-name">TASK MANAGER</a>
                    </div>
                    <div className="nav-links">
                        <ul className="nav-links-list">
                            <li className="nav-link-list-item">
                                <a href="#">COURSES</a>
                            </li>
                            <li className="nav-link-list-item">
                                <a href="#">ASSIGNMENTS</a>
                            </li>
                            <li className="nav-link-list-item">
                                <a href="#">PROJECTS</a>
                            </li>
                            <li className="nav-link-list-item">
                                <a href="#">CALENDAR</a>
                            </li>
                            <li className="nav-link-list-item">
                                <button onClick={() => {
                                    setDarkMode((prevState) => {
                                        return !prevState
                                    })
                                }}>
                                    <img src={darkMode ? sun : moon} alt="dark mode button"/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default App
