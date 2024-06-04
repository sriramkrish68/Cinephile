import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import empty from "../../empty.webp"
import { Header } from '../../components/navbar';
import { localStorageDeleteAction, localStorageIntialAction } from '../../redux/actions/action';
import './style.css'

export function ListPage() {
    const dispatch = useDispatch()
    const localdata = useSelector(state => state.localdata)
    useEffect(() => {
        const localValue = JSON.parse(localStorage.getItem("mylist"));
        if (localValue) {
            dispatch(localStorageIntialAction(localValue))
        }
    }, [dispatch]);



    const deleteItemLocal = (id) => {
        dispatch(localStorageDeleteAction(id))
    }

    return (
        <>
            <Header />
            <div className='listpage'>
                <h1 className="list-page__title">My Lists</h1>

                <ul className='movie-list'>
                    {localdata.length ? localdata?.map(item => (
                        <li key={item.id}>
                            <Link to={`/listdetail/${item.id}`}>
                                <span>{item.title}</span>
                            </Link>
                            <button
                                className="list-btn"
                                onClick={() => deleteItemLocal(item.id)}
                            >x</button>
                        </li>
                    )) : <img src={empty} alt="no yet create list" />}
                </ul>

            </div>
            <Footer />
        </>
    )
}
