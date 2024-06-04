import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/navbar';
import { useLocation } from 'react-router-dom/dist';
import Footer from '../../components/footer';
import './style.css';
import {
    FacebookIcon,
    PinterestIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon
} from "react-share";

export const ListPageDetail = () => {
    const [algoApiData, setAlgoApiData] = useState({})
    let { id } = useParams();
    const location = useLocation()
    useEffect(() => {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
            .then(res => res.json())
            .then(data => {
                setAlgoApiData(data)
            })
    }, [id])

    return (
        <>
            <Header />
            <div className="list-page">
                {algoApiData ? <h1 className="list-page__title">{algoApiData.title}</h1> : null}
                <ul>
                    <a href={`https://api.whatsapp.com/send?text=https://redux-movie-organizer.netlify.app${location.pathname}`}
                        target={"_blank"} rel="noreferrer">
                        <li><WhatsappIcon size={50} round={true} /></li>
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=https://redux-movie-organizer.netlify.app${location.pathname}`}
                        target={"_blank"} rel="noreferrer">
                        <li><FacebookIcon size={50} round={true} /></li>
                    </a>
                    <a href={`https://pinterest.com/pin/create/button/?url=https://redux-movie-organizer.netlify.app${location.pathname}&media=&description=Movie Organizer`}
                        target={"_blank"} rel="noreferrer">
                        <li><PinterestIcon size={50} round={true} /></li>
                    </a>
                    <a href={`https://t.me/share?url=https://redux-movie-organizer.netlify.app${location.pathname}`}
                        target={"_blank"} rel="noreferrer">
                        <li><TelegramIcon size={50} round={true} /></li>
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=https://redux-movie-organizer.netlify.app${location.pathname}&text=Movie Organizer`}
                        target={"_blank"} rel="noreferrer">
                        <li><TwitterIcon size={50} round={true} /></li>
                    </a>
                </ul>
                <div className="row">
                    {algoApiData.movies?.map((item) => (
                        <div className='list-movie-item' key={item.imdbID}>
                            {item.Poster === "N/A" ? <img src="https://media.comicbook.com/files/img/default-movie.png"
                                alt={item.Title} />
                                : <img src={item.Poster} alt={item.Title} />}
                            <Link to={`/movie/${item.imdbID}/`}>{item.Title}</Link>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}