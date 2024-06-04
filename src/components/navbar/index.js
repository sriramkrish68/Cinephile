import React, { useRef } from 'react';
import { CloseIcon, HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SearchBox } from '../searchbox';
import { Favorites } from '../favorites';


export const Header = () => {
    const search = useRef(null);
    const favlist = useRef(null);
    const { list } = useSelector(state => state)
    const getSearchPanel = () => {
        search.current.style.top = "0"
    }


    const closeSearchForm = () => {
        search.current.style.top = "-100vh"
    }

    const getFavList = () => {
        favlist.current.style.right = "0"
    }

    const closefavlist = () => {
        favlist.current.style.right = "-340px"
    }


    return (
        <header className="header">
            <h1 className="header__title">
                <Link to="/">
                    Cinephile
                    <div className='proggresBar'></div>
                </Link>
            </h1>
            <ul className='list'>
                <li><Link to="/">Movies</Link></li>
                <li><Link to="/lists">Lists</Link></li>
                <li onClick={getSearchPanel}>
                    <Search2Icon />
                </li>
                <li onClick={getFavList} className="fav-list-icon">
                    <span className='fav-length'>{list.length}</span>
                    <div className='fav-icon'>
                        <HamburgerIcon />
                    </div>
                </li>
            </ul>
            <div className='nav-search' ref={search}>
                <SearchBox datadom={search} />
                <button className='close-search' onClick={closeSearchForm}><CloseIcon /></button>
            </div>
            <div className='fav-list' ref={favlist}>
                <button className='close-fav-list' onClick={closefavlist}><CloseIcon /></button>
                <Favorites />
            </div>
        </header>
    )
}

