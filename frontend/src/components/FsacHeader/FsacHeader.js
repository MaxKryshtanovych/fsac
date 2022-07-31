import {NavLink} from "react-router-dom";
import './FsacHeader.scss'

function FsacHeader() {

    return (
        <header>
            <nav className={'nav-container'}>
                <ul>
                    <li><NavLink exact="true" to="/films">Films</NavLink></li>
                    <li><NavLink exact="true" to="/series">Series</NavLink></li>
                    <li><NavLink exact="true" to="/anime">Anime</NavLink></li>
                    <li><NavLink exact="true" to="/cartoons">Cartoons</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default FsacHeader;