import React from 'react';
import Footer from '../../components/footer';
import { Movies } from '../../components/movies';
import { Header } from '../../components/navbar';
import './style.css';


const MainPage = () => {

    return (
        <div className="main-page">
            <Header />
            <main className="main-page__content">
                <section className="main-page__main-section">
                    <div className="main-page__movies">
                        <Movies />
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default MainPage;