import React from "react";
import './PaginationTab.scss'

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
            <div className={'pagination-container'}>
                {prevPage !== false && (
                    <button id='prevButton' className={'prev-button'}
                            onClick={() => decPageNumber(pageFilter, setPageFilter, prevPage)}>← Page
                    </button>
                )}
                {nextPage !== false && (
                    <button id='nextButton' className={'next-button'}
                            onClick={() => incPageNumber(pageFilter, setPageFilter, nextPage)}>Page →
                    </button>
                )}
            </div>
        </>
    )
}

export default PaginationTab;