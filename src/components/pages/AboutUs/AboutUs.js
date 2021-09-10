import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data'


function AboutUs() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "ABOUT US" /> 
            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} /> 
            <HeroSection {...homeObjThree} /> 
        </>
    )
}

export default AboutUs;