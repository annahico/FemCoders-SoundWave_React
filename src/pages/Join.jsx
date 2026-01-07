import React from 'react';
// import './Join.css';
import Button from '../components/atoms/Button';

const SignUp = () => {
    return (
        <div className="join-page">
            <div className="join-container">
                <div className="join-title">
                    <h1>Join the <span className="accent">fun.</span></h1>
                </div>

                <div className="form-container">
                    <form className="join-form">
                        <div className="input-group">
                            <label>Name:</label>
                            <input type="text" />
                        </div>
                        <div className="input-group">
                            <label>Email:</label>
                            <input type="email" />
                        </div>
                        <div className="input-group">
                            <label>Password:</label>
                            <input type="password" />
                        </div>
                        <Button type="submit">Join Now</Button>
                    </form>
                </div>
            </div>

            {/* Círculos decorativos de fondo */}
            <div className="circle circle-bottom-left"></div>
            <div className="circle circle-top-right"></div>
        </div>
    );
};

export default SignUp;