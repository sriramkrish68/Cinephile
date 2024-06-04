import React, { useState } from 'react';
import { Alert, AlertIcon, Stack } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { addToList, removeToList } from '../../redux/actions/action';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';


export const MovieItem = (props) => {

    const [statusAdd, setStatusAdd] = useState(false)
    const [statusHave, setStatusHave] = useState(false)
    const nav = useNavigate(null)
    const dispatch = useDispatch()
    const { list } = useSelector(state => state)

    const addList = (props) => {
        dispatch(addToList(props))
        setStatusAdd(true)
        setTimeout(() => {
            setStatusAdd(false)
        }, 900)
    }

    const removeItemListAlert = (props) => {
        dispatch(removeToList(props))
        setStatusHave(true)
        setTimeout(() => {
            setStatusHave(false)
        }, 900)
    }


    const getMovieDetail = (id) => {
        nav(`/movie/${id}`)
    }

    return (
        <>
            <article className="movie-item">
                {props?.Poster === "N/A" ?
                    <img className="movie-item__poster"
                        src="https://media.comicbook.com/files/img/default-movie.png"
                        alt={props?.Title} />
                    : <img className="movie-item__poster"
                        src={props?.Poster} alt={props?.Title} />
                }

                <div className="movie-item__info">
                    <Link to={`/movie/${props.imdbID}`}><h3 className="movie-item__title">{props?.Title}</h3></Link>
                </div>


                {statusAdd ? <div className='alert'>
                    <Stack>
                        <Alert status='success' variant='solid' bgColor="whatsapp">
                            <AlertIcon />
                            Movie added to favorites !
                        </Alert>
                    </Stack>
                </div> : null}

                {statusHave ? <div className='alert'>
                    <Stack>
                        <Alert status='error' variant='solid' >
                            <AlertIcon />
                            Movie removed from favorites !
                        </Alert>
                    </Stack>
                </div> : null}

            </article>
            <div className='movie-item_action'>
                {list.find(item => item.imdbID === props.imdbID) ?
                    <button onClick={() => removeItemListAlert(props)} > <FavoriteIcon /></button> :
                    <button onClick={() => addList(props)}><FavoriteBorderIcon /></button>}
                <button onClick={() => { getMovieDetail(props.imdbID) }}><InfoIcon /></button>
            </div>
        </>

    )
}



