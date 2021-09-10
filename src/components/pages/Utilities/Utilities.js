import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne, homeObjTwo } from './Data'


function Utilities() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "UTILITIES" /> 
            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} />  
        </>
    )
}

export default Utilities