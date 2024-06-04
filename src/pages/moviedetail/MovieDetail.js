import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/navbar'
import PublicIcon from '@mui/icons-material/Public';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import StarsIcon from '@mui/icons-material/Stars';
import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToList, removeToList } from '../../redux/actions/action';
import Footer from '../../components/footer';

export function MovieDetail() {
    const [movieDeatil, setMovieDeatil] = useState({})
    const list = useSelector(state => state.list)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=278924d5`)
            .then(res => res.json())
            .then(apiData => {
                setMovieDeatil(apiData)
            })
    }, [id])
    return (
        <>
            <Header />
            {Object.keys(movieDeatil).length ? <div className='movie-item-detail'>
                {movieDeatil?.Poster === 'N/A' ? <img src="https://media.comicbook.com/files/img/default-movie.png"
                    alt={movieDeatil.Title} /> : <img src={movieDeatil?.Poster} alt={movieDeatil?.Title} />}
                <div className='movie-item-detail-vs'>
                    <h2>{movieDeatil?.Title}</h2>
                    <ul>
                        <li>
                            <StarsIcon />
                            <span>{movieDeatil?.imdbRating}</span>
                        </li>
                        <li>
                            <QueryBuilderIcon />
                            <span>{movieDeatil?.Runtime}</span>
                        </li>
                        <li>
                            <SentimentSatisfiedAltIcon />
                            <span>{movieDeatil?.Year}</span>
                        </li>
                        <li>
                            <FilterVintageIcon />
                            <span>{movieDeatil?.Genre}</span>
                        </li>
                        <li>
                            <PublicIcon />
                            <span>{movieDeatil?.Country}</span>
                        </li>
                    </ul>
                    <p className='movie-text'>{movieDeatil?.Plot}</p>
                    <div className='movie-detail-footer'>
                        <div>
                            <p className='hd'>Director</p>
                            <p>{movieDeatil?.Director}</p>
                        </div>
                        <div>
                            <p className='hd'>Actors</p>
                            <p>{movieDeatil?.Actors}</p>
                        </div>
                    </div>
                    <div className='movie-detail-btns'>
                        {list.find(item => item.imdbID === movieDeatil.imdbID) ?
                            <button
                                onClick={() => dispatch(removeToList(movieDeatil))}
                                className='bg-nored'>- REMOVE LIST</button> :
                            <button
                                onClick={() => dispatch(addToList(movieDeatil))}
                                className='bg-red'>+ ADD LIST</button>}
                        <a target={"_blank"} rel="noreferrer"
                            href={`https://www.imdb.com/title/${movieDeatil.imdbID}/`}>
                            <button className='bg-3a70cf '>MORE INFO FROM IMDB</button>
                        </a>

                    </div>
                </div>

            </div> : <span className='movie-item-detail'>Loading ...</span>}
            <Footer/>
        </>
    )
}
