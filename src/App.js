import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main';
import { ListPage } from './pages/listpage';
import { ListPageDetail } from './pages/listdetail';
import './reset.css';
import './common.css';
import { MovieDetail } from './pages/moviedetail/MovieDetail';
import { NotFound } from './pages/NotFound/NotFound';
import GitHubIcon from '@mui/icons-material/GitHub';


const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lists" element={<ListPage />} />
        <Route path="/listdetail/:id" element={<ListPageDetail />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <a href='https://github.com'
        target={"_blank"} rel="noreferrer">
        <div className='my-github'>
          <GitHubIcon />
        </div>
      </a>
    </div>
  )
}

export default App


