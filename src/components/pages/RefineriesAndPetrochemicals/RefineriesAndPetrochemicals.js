import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne, homeObjTwo } from './Data'


function RefineriesAndPetroChemicals() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "REFINERIES AND PETROCHEMICALS" /> 
            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} />  
        </>
    )
}

export default RefineriesAndPetroChemicals