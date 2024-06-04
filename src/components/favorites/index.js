import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert, AlertIcon, Stack } from '@chakra-ui/react'
import { listIsEmpty, localStorageAction, removeToList } from '../../redux/actions/action';
import { useRef } from 'react';

import './style.css';


export const Favorites = () => {
    const [listName, setListName] = useState("");
    const [saveList, setSaveList] = useState(false)
    const [data, setData] = useState();
    const { list, localdata } = useSelector(state => state)

    const dispatch = useDispatch()
    const removeList = (param) => {
        dispatch(removeToList(param))
    }


    const favlistOverflow = useRef(null);
    const [listHeight, setListHeight] = useState(0);

    useEffect(() => {
        setListHeight(favlistOverflow.current.clientHeight)
    }, [list])


    const getSaveList = (e) => {
        e.preventDefault()
        setListName("")
        const listObj = {
            title: listName,
            movies: list
        }

        fetch('https://acb-api.algoritmika.org/api/movies/list', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listObj),
        })
            .then(res => res.json())
            .then(apiData => {
                setData(apiData)
                dispatch(localStorageAction([apiData]))
            })
            .finally(() => {
                dispatch(listIsEmpty())
                setSaveList(true)
                setTimeout(() => {
                    setSaveList(false)
                }, 2000)
                console.log(localdata);
            })
    }


    return (
        <div className="favorites">
            <form onSubmit={getSaveList}>
                <input
                    placeholder='New list'
                    className="favorites__name"
                    value={listName}
                    onChange={(e) => { setListName(e.target.value) }}
                />
                <button
                    type="submit"
                    className="favorites__save"
                    disabled={!listName || !list.length}>Save list</button>
            </form>
            {data ? <Link to={`/listdetail/${data.id}`} >
                <button className="favorites__save">Go to list : {data.title}</button>
            </Link> : null
            }

            <ul className="favorites__list" ref={favlistOverflow}
                style={{
                    overflowY: listHeight > 370 ? 'scroll' : 'auto',
                    paddingRight: listHeight > 370 ? '10px' : '0',
                    maxHeight: listHeight > 370 ? '375px' : 'auto'
                }}>
                {list?.map((item) => (<li key={item?.imdbID} className="list-item">
                    <span>{item?.Title} ({item?.Year})</span>
                    <button
                        onClick={() => { removeList(item) }}
                        className="list-btn">x</button></li>))}
            </ul>

            {saveList ? <div className='alert'>
                <Stack>
                    <Alert status='success' variant='solid' bgColor="whatsapp">
                        <AlertIcon />
                        Added a list to the my lists !
                    </Alert>
                </Stack>
            </div> : null}

        </div>
    )
}
