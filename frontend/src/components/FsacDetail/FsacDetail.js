import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const FsacDetail = (props) => {

    const {id} = useParams();
    const BASE_URL = `http://127.0.0.1:8000/api/${props.fsac}`;

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

    console.log(data)

    return (
        <>
            {loading && <Spinner/>}
            {!loading && (
                <>
                    <p>{data.data.title}</p>
                    <p>{data.data.year}</p>
                    <p>{data.data.desc}</p>
                    <p>{data.data.rating}</p>
                    {props.fsac !== 'anime' && props.fsac !== 'cartoons' && (
                        <>
                            {data.data.director.map(item =>
                                <>
                                    <p>{item.name}</p>
                                    <p>{item.surname}</p>
                                </>
                            )}
                            {data.data.actor.map(item =>
                                <>
                                    <p>{item.name}</p>
                                    <p>{item.surname}</p>
                                </>
                            )}
                        </>
                    )}
                    <ul>
                        {data.data.shot.map(item =>
                            <>
                                <img src={item.image} alt={'sa'} style={{width: '100px', height: '100px'}}/>
                            </>
                        )}
                    </ul>
                </>
            )}
        </>
    )
}

export default FsacDetail;