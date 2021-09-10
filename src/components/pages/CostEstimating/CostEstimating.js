import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne, homeObjTwo } from './Data'


function CostEstimating() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "COST ESTIMATING" /> 
            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} />  
        </>
    )
}

export default CostEstimating