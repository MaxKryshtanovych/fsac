import {NavLink} from "react-router-dom";
import './FsacHeader.scss'

function FsacHeader() {

    return (
        <header>
            <nav className={'nav-container'}>
                <ul>
                    <li><NavLink exact="true" to="/films" className={({ isActive }) => (isActive ? 'active' : '')}>Films</NavLink></li>
                    <li><NavLink exact="true" to="/series" className={({ isActive }) => (isActive ? 'active' : '')}>Series</NavLink></li>
                    <li><NavLink exact="true" to="/anime" className={({ isActive }) => (isActive ? 'active' : '')}>Anime</NavLink></li>
                    <li><NavLink exact="true" to="/cartoons" className={({ isActive }) => (isActive ? 'active' : '')}>Cartoons</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default FsacHeader;