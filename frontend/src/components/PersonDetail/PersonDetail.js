import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import './PersonDetail.scss'
import ImageModal from "../ImageModal/ImageModal";
import {Helmet} from "react-helmet";

const PersonDetail = (props) => {

    const {slug} = useParams();
    const BASE_URL = `http://127.0.0.1:8000/api/${props.person}`;
    const MEDIA_URL = `http://127.0.0.1:8000`

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

    return (
        <>
            {loading && <Spinner/>}
            {!loading && (
                <>
                    <Helmet>
                        <title>FSAC - {data.data.name} {data.data.surname}</title>
                    </Helmet>
                    <div className={'person-container'}>
                        <div className={'fullname-container'}>
                            <p>{data.data.name} {data.data.surname}</p>
                        </div>
                        <div className={'avatar-container'}>
                            <img src={data.data.avatar} alt={data.data.name} onClick={
                                (e) => modal(e.target.src, false)}/>
                        </div>
                    </div>
                    {data.data.films_by_person.length > 0 && (
                        <div className={'cin-container'}>
                            {props.person === 'directors' ?
                                <label>Directed films:</label> :
                                <label>Starred in films:</label>}
                            {data.data.films_by_person.map(item =>
                                <Link to={`/films/${item.slug}`} key={item.id}>
                                    <img src={`${MEDIA_URL}${item.poster}`} alt={item.title}/>
                                    <p>{item.title}, {item.year}</p>
                                </Link>
                            )}
                        </div>
                    )}
                    {data.data.series_by_person.length > 0 && (
                        <div className={'cin-container'}>
                            {props.person === 'directors' ?
                                <label>Directed series:</label> :
                                <label>Starred in series:</label>}
                            {data.data.series_by_person.map(item =>
                                <Link to={`/series/${item.slug}`} key={item.id}>
                                    <img src={`${MEDIA_URL}${item.poster}`} alt={item.title}/>
                                    <p>{item.title}, {item.year}</p>
                                </Link>
                            )}
                        </div>
                    )}
                    {isOpen && (
                        <ImageModal setIsOpen={setIsOpen} image={imageModal}/>
                    )}
                </>
            )}
        </>
    )
}

export default PersonDetail;