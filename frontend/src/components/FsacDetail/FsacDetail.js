import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import './FsacDetail.scss'
import ImageModal from "../ImageModal/ImageModal";
import {Helmet} from "react-helmet";

const FsacDetail = (props) => {

    const {slug} = useParams();
    const BASE_URL = `http://127.0.0.1:8000/api/${props.fsac}`;

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [imageModal, setImageModal] = useState();

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const getData = await axios.get(`${BASE_URL}/${slug}/`);
                setData(getData);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetch();
    }, [props.fsac, BASE_URL, slug]);

    function modal(e) {
        setIsOpen(true)
        setImageModal(e)
    }


    function createHelmet(title, year) {
        if (props.fsac == 'films') {
            return `FilmsSAC - ${title}, ${year}`;
        }
        if (props.fsac == 'series') {
            return `FSeriesAC - ${title}, ${year}`;
        }
        if (props.fsac == 'anime') {
            return `FSAnimeC - ${title}, ${year}`;
        }
        if (props.fsac == 'cartoons') {
            return `FSACartoons - ${title}, ${year}`;
        }
    }

    return (
        <>
            <div className={'detail-container'}>
                {loading && <Spinner/>}
                {!loading && (
                    <>
                        <Helmet>
                            <title>{createHelmet(data.data.title, data.data.year)}</title>
                        </Helmet>
                        <div className={'movie-header'}>
                            <div className={'poster-container'}>
                                <img src={data.data.poster} alt={data.data.title} onClick={
                                    (e) => modal(e.target.src, false)}/>
                                <label>{data.data.rating.value}
                                    <div className={'star'}>★</div>
                                </label>
                            </div>

                            <div className={'info-container'}>
                                <p className={'info-header'}>{data.data.title}, {data.data.year}</p>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <p>Genres:</p>
                                        </td>
                                        <td>
                                            {data.data.genre.map((item, i) =>
                                                <p key={item.id}>
                                                    {item.name}
                                                    {i < data.data.genre.length - 1 ? ', ' : ''}
                                                </p>
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        {props.fsac !== 'anime' && props.fsac !== 'cartoons' && (
                                            <>
                                                <td>
                                                    <p>Directors:</p>
                                                </td>
                                                <td>
                                                    {data.data.director.map((item, i) =>
                                                        <>
                                                            <Link to={`/directors/${item.slug}`} key={item.id}>
                                                                {item.name} {item.surname}
                                                            </Link>
                                                            <p>{i < data.data.director.length - 1 ? ', ' : ''}</p>
                                                        </>
                                                    )}
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                    <tr>
                                        {props.fsac !== 'anime' && props.fsac !== 'cartoons' && (
                                            <>
                                                <td>
                                                    <p>Actors:</p>
                                                </td>
                                                <td>
                                                    {data.data.actor.map((item, i) =>
                                                        <Link to={`/actors/${item.slug}`} key={item.id}>
                                                            {item.name} {item.surname}
                                                            {i < data.data.actor.length - 1 ? ', ' : ''}
                                                        </Link>
                                                    )}
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Description:</p>
                                        </td>
                                        <td>
                                            <p>{data.data.desc}</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={'trailer-container'}>
                            <label>Trailer</label>
                            <iframe src={`https://www.youtube.com/embed/${data.data.trailer}`}></iframe>
                        </div>
                        {data.data.watch_url.map(item =>
                            <div className={'watch-container'} key={item.id}>
                                <p>You can watch this <a href={item.value}>here</a></p>
                                <p>Recommended voiceover: {item.desc}</p>
                            </div>
                        )}
                        {isOpen && (
                            <ImageModal setIsOpen={setIsOpen} image={imageModal}/>
                        )}
                    </>
                )}
            </div>
        </>
    )
}

export default FsacDetail;