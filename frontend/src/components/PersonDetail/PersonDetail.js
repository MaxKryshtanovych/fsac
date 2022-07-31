import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const PersonDetail = (props) => {

    const {id} = useParams();
    const BASE_URL = `http://127.0.0.1:8000/api/${props.person}`;

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);
            try {
                const getData = await axios.get(`${BASE_URL}/${id}/`);
                setData(getData);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetch();
    }, [props.fsac, BASE_URL, id]);

    return (
        <>
            {loading && <Spinner/>}
            {!loading && (
                <>
                    <p>{data.data.name}</p>
                    <p>{data.data.surname}</p>
                    <p>{data.data.avatar}</p>
                    <ul>
                        {data.data.films_by_person.map(item =>
                            <li key={item.id}>
                                <Link to={`/films/${item.id}`}>{item.title}</Link>
                                <p>{item.year}</p>
                                <p>{item.desc}</p>
                                <p>{item.rating}</p>
                            </li>
                        )}
                    </ul>
                    <ul>
                        {data.data.series_by_person.map(item =>
                            <li key={item.id}>
                                <Link to={`/series/${item.id}`}>{item.title}</Link>
                                <p>{item.year}</p>
                                <p>{item.desc}</p>
                                <p>{item.rating}</p>
                            </li>
                        )}
                    </ul>
                </>
            )}
        </>
    )
}

export default PersonDetail;