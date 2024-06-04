import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, searchIntialValueAction } from '../../redux/actions/action';
import { Spinner } from '@chakra-ui/react'

import './style.css';
import { useNavigate } from 'react-router-dom';


export const SearchBox = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchLine, setSearchLine] = useState("")
    const dispatch = useDispatch()
    const { firstsearchLine } = useSelector(state => state)
    const nav = useNavigate()

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${firstsearchLine[0]}&apikey=278924d5`)
            .then(res => res.json())
            .then(apiData => {
                dispatch(getMovies(apiData?.Search))
            })
    }, [dispatch, firstsearchLine])

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=278924d5`)
            .then(res => res.json())
            .then(apiData => {
                if (apiData?.Search) {
                    dispatch(getMovies(apiData?.Search))
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
                props.datadom.current.style.top = "-100vh";
                dispatch(searchIntialValueAction(searchLine))
                nav("/")
            })
    }
    return (
        <>
            <form className="search-form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-label" id='search-input'>
                    Search movie by name:
                    <input
                        type="text"
                        id='search-input'
                        className="search_input"
                        placeholder="For example, Shawshank Redemption"
                        onChange={(e) => { setSearchLine(e.target.value) }} />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Search
                </button>
            </form>

            <div className='loading'>
                {loading ? <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='lg'
                /> : null}
            </div>
        </>
    )
}

