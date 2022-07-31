import React from "react";

const SortTab = ({orderingFilter, setOrderingFilter}) => {

    function sortClick(e, field) {
        if (orderingFilter !== field) {
            setOrderingFilter(`${field}`)
        }
        if (orderingFilter === field) {
            setOrderingFilter(`-${field}`)
        }
    }

    return (
        <>
            <ul>
                <li>
                    <button onClick={(e) => sortClick(e, 'title')}>Title</button>
                    <button onClick={(e) => sortClick(e, 'year')}>Year</button>
                    <button onClick={(e) => sortClick(e, 'rating')}>Rating</button>
                    <button onClick={(e) => sortClick(e, 'created')}>Date</button>
                </li>
            </ul>
        </>
    )
}

export default SortTab;