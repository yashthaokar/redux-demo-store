import React from 'react';
import Products from '../components/Products';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h2 className="heading">Welcome to MyStore</h2>
            <section className='sect'>
                <h3 className='product'>Products</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;
