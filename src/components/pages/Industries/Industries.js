import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import {homeObjFive, homeObjFour, homeObjOne, homeObjSeven, homeObjSix, homeObjThree, homeObjTwo} from './Data'

function Industries() {
    return (
        <>
            <Title title = "INDUSTRIES" />
            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} /> 
            <HeroSection {...homeObjThree} /> 
            <HeroSection {...homeObjFour} /> 
            <HeroSection {...homeObjFive} /> 
            <HeroSection {...homeObjSix} />  
        </>
    )
}

export default Industries
