import React, {useEffect, useRef, useState} from "react";
import './GenresTab.scss';

const GenresTab = ({genres, genreFilter, setGenreFilter}) => {
    const [active, setActive] = useState(null);

    const genreClick = (e, genre) => {
        active == e ? setActive(null) : setActive(e);
        genreFilter === genre ? setGenreFilter('') : setGenreFilter(`${genre}`)
    }

    return (
        <>
            <div className={'genre-container'}>
                <ul>
                    {genres.map(genre =>
                        <li key={genre.id} id={genre.id}
                            className={`${genre.id == active && 'active'}`}
                            onClick={(e) => genreClick(e.target.id, genre.name)}>
                            {genre.name}
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default GenresTab;