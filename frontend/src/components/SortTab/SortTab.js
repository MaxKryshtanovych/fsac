import React, {useEffect, useState} from "react";
import './SortTab.scss';

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
            <div className={'sort-container'}>
                <ul>
                    <h1>Sort by:</h1>
                    <li onClick={(e) => sortClick(e, 'title')}
                        id={'title'} className={`${orderingFilter === 'title' ? 'active' : ''}
                                                 ${orderingFilter === '-title' ? 'active' : ''}`}>Title
                        <span className={`${orderingFilter === 'title' ? 'isee' : 'idontsee'}`}>↑</span>
                        <span className={`${orderingFilter === '-title' ? 'isee' : 'idontsee'}`}>↓</span>
                    </li>
                    <li onClick={(e) => sortClick(e, 'year')}
                        id={'year'} className={`${orderingFilter === 'year' ? 'active' : ''}
                                                ${orderingFilter === '-year' ? 'active' : ''}`}>Year
                        <span className={`${orderingFilter === 'year' ? 'isee' : 'idontsee'}`}>↑</span>
                        <span className={`${orderingFilter === '-year' ? 'isee' : 'idontsee'}`}>↓</span>
                    </li>
                    <li onClick={(e) => sortClick(e, 'rating')}
                        id={'rating'} className={`${orderingFilter === 'rating' ? 'active' : ''}
                                                  ${orderingFilter === '-rating' ? 'active' : ''}`}>Rating
                        <span className={`${orderingFilter === 'rating' ? 'isee' : 'idontsee'}`}>↑</span>
                        <span className={`${orderingFilter === '-rating' ? 'isee' : 'idontsee'}`}>↓</span>
                    </li>
                    <li onClick={(e) => sortClick(e, 'created')}
                        id={'created'} className={`${orderingFilter === 'created' ? 'active' : ''}
                                                   ${orderingFilter === '-created' ? 'active' : ''}`}>Date
                        <span className={`${orderingFilter === 'created' ? 'isee' : 'idontsee'}`}>↑</span>
                        <span className={`${orderingFilter === '-created' ? 'isee' : 'idontsee'}`}>↓</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SortTab;