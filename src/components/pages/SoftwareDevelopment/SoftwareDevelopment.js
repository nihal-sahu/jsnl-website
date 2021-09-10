import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne, homeObjTwo } from './Data'


function SoftwareDevelopment() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "SOFTWARE DEVELOPMENT" /> 
            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} />  
        </>
    )
}

export default SoftwareDevelopment