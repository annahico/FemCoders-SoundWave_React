import React from 'react';
// import './Features.css';
import covers from '../img/covers.jpg';
import microphone from '../img/microphone.svg'; 
import albums from '../img/albums.svg';

const Features = () => {
    return (
        <div className="discover-page">
            <div className="discover-container">
                <div className="discover-text">
                    <h1>Discover new music</h1>
                    <div className="icon-row">
                        <div className="icon-item">
                            <div className="icon-bg"><img src={microphone} alt="" /></div>
                            <span>Charts</span>
                        </div>
                        <div className="icon-item">
                            <div className="icon-bg"><img src={albums} alt="" /></div>
                            <span>Albums</span>
                        </div>
                        <div className="icon-item">
                            <div className="icon-bg"><span>{'>'}</span></div>
                            <span>More</span>
                        </div>
                    </div>
                    <p>By joining you can benefit by listening to the latest albums released.</p>
                </div>
                <div className="discover-image">
                    <img src={covers} alt="Albums covers" />
                </div>
            </div>
        </div>
    );
};

export default Features;