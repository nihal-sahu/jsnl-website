import React from 'react'
import LazyLoad from 'react-lazyload';
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo} from './Data'

function Home() {
    let displayImages = ["/images/titleImage1.jpg", "/images/titleImage2.jpg", "/images/titleImage3.jpg"]
    const imageIndex = Math.floor(Math.random() * 3);

    return (
        <>
            <LazyLoad>
                <img src = {process.env.PUBLIC_URL + displayImages[imageIndex]} /> 
            </LazyLoad>
            <div className = 'headingRegular'>
                Meet JSNL...
            </div>

            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} /> 

        </>
    )
}

export default Home
