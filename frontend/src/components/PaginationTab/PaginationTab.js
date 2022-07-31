import React from "react";

function decPageNumber(pageFilter, setPageFilter, prevPage) {
    if (prevPage) {
        setPageFilter(parseInt(pageFilter) - 1);
    }
}

function incPageNumber(pageFilter, setPageFilter, nextPage) {
    if (nextPage) {
        setPageFilter(parseInt(pageFilter) + 1);
    }
}

const PaginationTab = ({pageFilter, setPageFilter, prevPage, nextPage}) => {

    return (
        <>
            {prevPage !== false && (
                <button id='prevButton' onClick={() => decPageNumber(pageFilter, setPageFilter, prevPage)}>Prev page</button>)}
            {nextPage !== false && (
                <button id='nextButton' onClick={() => incPageNumber(pageFilter, setPageFilter, nextPage)}>Next page</button>)}
        </>
    )
}

export default PaginationTab;