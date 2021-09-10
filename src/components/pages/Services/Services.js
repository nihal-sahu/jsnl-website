import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import {homeObjFive, homeObjFour, homeObjOne, homeObjSix, homeObjThree, homeObjTwo, homeObjSeven} from './Data'

function Services() {
    return (
        <>
            <Title title = "SERVICES" /> 
            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} /> 
            <HeroSection {...homeObjThree} /> 
            <HeroSection {...homeObjFour} /> 
            <HeroSection {...homeObjFive} /> 
            <HeroSection {...homeObjSix} /> 
            <HeroSection {...homeObjSeven} /> 
        </>
    )
}

export default Services
