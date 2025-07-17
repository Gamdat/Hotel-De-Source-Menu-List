import React from 'react';
import './Home.css';
import Header from '../Components/Header';

const Home = () => {
    return(
        <>
        <Header/>
                <section className='home'>
            <div className='overlay'>
                <div className='home-content'>
                    <h1>Welcome to Hotel De Source (Oyinade)</h1>
                    <a href="#rooms" className='btn'>Explore Our Services</a>

                </div>
            </div>
        </section>
        </>

    )
}

export default Home;