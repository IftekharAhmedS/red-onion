import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="hero-banner">
                <div className="hero-title w-full mx-auto">
                    <h1 className=' text-center text-3xl font-medium py-12'>Best food waiting for your belly</h1>
                </div>
                <div className="hero-searchbar flex justify-center">
                    <input type="text" className='food-searchbar pl-4' placeholder='Search foods' />
                </div>
            </div>
        </div>
    );
};

export default Home;