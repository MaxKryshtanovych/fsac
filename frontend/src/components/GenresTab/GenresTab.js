import React from "react";
import './GenresTab.scss';

const GenresTab = ({genres, genreFilter, setGenreFilter}) => {

    function genreClick(e, genre) {
        if (genreFilter === genre) {
            setGenreFilter('')
        } else {
            setGenreFilter(`${genre}`)
        }
    }
    
    return (
        <>
            <ul  className={'genre-list'}>
                {genres.map(genre =>
                    <li key={genre.id}>
                        <button onClick={(e) => genreClick(e, genre.name)}>
                            {genre.name}</button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default GenresTab;