import React, {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import SearchTab from "../SearchTab/SearchTab";
import YearsTab from "../YearsTab/YearsTab";
import GenresTab from "../GenresTab/GenresTab";
import SortTab from "../SortTab/SortTab";
import PaginationTab from "../PaginationTab/PaginationTab";
import {Link} from "react-router-dom";
import './FsacList.scss';
import {Helmet} from "react-helmet";

const FsacList = (props) => {

    const BASE_URL = `http://127.0.0.1:8000/api/${props.fsac}`;

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [genres, setGenres] = useState([]);
    const [pageFilter, setPageFilter] = useState('1');
    const [prevPage, setPrevPage] = useState(false);
    const [nextPage, setNextPage] = useState(false);
    const [orderingFilter, setOrderingFilter] = useState('-created');
    const [searchFilter, setSearchFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('');
    const [genreFilter, setGenreFilter] = useState('');


    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const getGenres = axios.get(`${BASE_URL}-genres/`);
                const getData = axios.get(`${BASE_URL}/`, {
                    params: {
                        page: pageFilter,
                        ordering: orderingFilter,
                        search: searchFilter,
                        year: yearFilter,
                        genre__name: genreFilter,
                    }
                });
                const responses = await axios.all([getData, getGenres]);
                setData(responses[0].data);
                console.log(responses[0].data);
                setPrevPage(responses[0].data.prev);
                setNextPage(responses[0].data.next);
                setGenres(responses[1].data);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetch();
    }, [props.fsac, BASE_URL, pageFilter, orderingFilter, searchFilter, yearFilter, genreFilter]);

    function createHelmet() {
        if (props.fsac == 'films') {
            return `FilmsSAC`;
        }
        if (props.fsac == 'series') {
            return `FSeriesAC`;
        }
        if (props.fsac == 'anime') {
            return `FSAnimeC`;
        }
        if (props.fsac == 'cartoons') {
            return `FSACartoons`;
        }
    }

    return (
        <>
            <Helmet>
                <title>{createHelmet()}</title>
            </Helmet>
            <div className='filter-container'>
                <div className={'search-years-container'}>
                    <SearchTab setSearchFilter={setSearchFilter} searchFilter={searchFilter}/>
                    <YearsTab yearFilter={yearFilter} setYearFilter={setYearFilter}/>
                </div>
                <GenresTab genres={genres} genreFilter={genreFilter} setGenreFilter={setGenreFilter}/>
                <SortTab orderingFilter={orderingFilter} setOrderingFilter={setOrderingFilter}/>
            </div>
            {loading && <Spinner/>}
            {!loading && (
                <>
                    <ul className={'movies-list'}>
                        {data.results.map(item =>
                            <li key={item.id}>
                                <Link className={'img-link'} to={`/${props.fsac}/${item.slug}`}>
                                    <img src={item.poster} alt={item.title}/>
                                    <label>{item.rating.value}
                                        <div className={'star'}>★</div>
                                    </label>
                                </Link>
                                <Link className={'title-link'} to={`/${props.fsac}/${item.slug}`}>
                                    <h1>{item.title}</h1>
                                    <div>
                                        <p>{item.year}, </p>
                                        {item.genre.map((g, i) =>
                                            <p>
                                                {g.name}
                                                {i < item.genre.length - 1 ? ', ' : ''}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            </li>
                        )}
                    </ul>
                    <PaginationTab pageFilter={pageFilter} setPageFilter={setPageFilter} prevPage={prevPage}
                                   nextPage={nextPage}/>
                </>
            )}
        </>
    )
}

export default FsacList;