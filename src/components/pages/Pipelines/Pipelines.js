import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne } from './Data'


function Pipelines() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "PIPELINES" /> 
            <HeroSection {...homeObjOne} />    
        </>
    )
}

export default Pipelines