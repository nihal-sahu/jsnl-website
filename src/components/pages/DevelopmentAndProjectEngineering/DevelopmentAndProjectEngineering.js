import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne, homeObjTwo } from './Data'


function DevelopmentAndProjectEngineering() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "DEVELOPMENT AND PROJECT ENGINEERING" /> 
            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} />  
        </>
    )
} 

export default DevelopmentAndProjectEngineering;