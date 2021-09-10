import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne } from './Data'


function Software() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "SOFTWARE" /> 
            <HeroSection {...homeObjOne} />     
        </>
    )
}

export default Software