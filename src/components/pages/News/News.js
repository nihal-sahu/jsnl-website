import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne } from './Data'


function News() {
    return (
        <>
        {/*Title Card*/}
        <Title title = "NEWS" /> 
        <div className = 'headingRegular'>
            <p> Stay tuned for up and coming JSNL news!  </p>
        </div>


        <HeroSection {...homeObjOne} />     
        </>
       
    )
}

export default News