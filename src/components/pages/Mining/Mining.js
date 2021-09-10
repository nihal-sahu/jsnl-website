import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne } from './Data'


function Mining() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "MINING" /> 
            <HeroSection {...homeObjOne} />   
        </>
    )
}

export default Mining