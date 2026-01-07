import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';
import girlImage from '../img/landing-page-girl.png';
import './Home.css';

const Home = () => {
    return (
        <section className="home-container">
            {/* Sticker Sheet */}
            <div className="circle circle-pink"></div>
            <div className="circle circle-blue-top"></div>
            <div className="circle circle-blue-bottom"></div>

            <div className="home-content">
                <div className="home-image">
                    <img src={girlImage} alt="Girl with headphones" />
                </div>

                <div className="home-text">
                    <h1>Feel The Music</h1>
                    <p>Stream over 20 thousand songs with one click</p>
                    <Link to="/join">
                        <Button>Join Now</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;