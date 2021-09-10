import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne, homeObjTwo } from './Data'


function OilAndGas() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "OIL & GAS" /> 
            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} />  
        </>
    )
}

export default OilAndGas