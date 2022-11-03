import React from "react";
import './SearchTab.scss';

const SearchTab = ({searchFilter, setSearchFilter}) => {

    function handleChange(value) {
        setSearchFilter(value);
    }

    return (
        <div className='searchbar'>
            <input type="text"
                   placeholder={"Search             🔎︎"}
                   onChange={(e) => handleChange(e.target.value)}
                   value={searchFilter}
            />
        </div>
    )
}

export default SearchTab;