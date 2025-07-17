import React from 'react';
import { Link} from 'react-router-dom';
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
                 <Link to="/services">
                    <button className='service-btn'>Explore Our Services</button>
                    </Link>
                </div>
            </div>
        </section>
        </>

    )
}

export default Home;