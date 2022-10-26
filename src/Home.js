import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card';
import {Link} from 'react-router-dom';
function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className='home__section'>

            <Card
                src1="https://static.dw.com/image/55000481_303.jpg"
                src2="https://static.dw.com/image/55000481_303.jpg"
                src3="https://static.dw.com/image/55000481_303.jpg"
                title="Unique Stays"
                description="Explore the world."
            />
            <Card
                src1="https://static.dw.com/image/55000481_303.jpg"
                src2="https://static.dw.com/image/55000481_303.jpg"
                src3="https://static.dw.com/image/55000481_303.jpg"
                title="Unique Stays"
                description="Explore the world."
            />
            <Card
                src1="https://static.dw.com/image/55000481_303.jpg"
                src2="https://static.dw.com/image/55000481_303.jpg"
                src3="https://static.dw.com/image/55000481_303.jpg"
                title="Unique Stays"
                description="Explore the world."
            />
            
            <Card
                src1="https://static.dw.com/image/55000481_303.jpg"
                src2="https://static.dw.com/image/55000481_303.jpg"
                src3="https://static.dw.com/image/55000481_303.jpg"
                title="Unique Stays"
                description="Explore the world."
            />
            <Card
                src1="https://static.dw.com/image/55000481_303.jpg"
                src2="https://static.dw.com/image/55000481_303.jpg"
                src3="https://static.dw.com/image/55000481_303.jpg"
                title="Unique Stays"
                description="Explore the world."
            />
            <Card
                src1="https://static.dw.com/image/55000481_303.jpg"
                src2="https://static.dw.com/image/55000481_303.jpg"
                src3="https://static.dw.com/image/55000481_303.jpg"
                title="Unique Stays"
                description="Explore the world."
            />
            <Card
                src1="https://static.dw.com/image/55000481_303.jpg"
                src2="https://static.dw.com/image/55000481_303.jpg"
                src3="https://static.dw.com/image/55000481_303.jpg"
                title="Unique Stays"
                description="Explore the world."
            />
            <Card
                src1="https://static.dw.com/image/55000481_303.jpg"
                src2="https://static.dw.com/image/55000481_303.jpg"
                src3="https://static.dw.com/image/55000481_303.jpg"
                title="Unique Stays"
                description="Explore the world."
            />
            </div>

            <Link to='/search'>Search Page</Link>
        </div>
    )
}

export default Home