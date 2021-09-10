import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne } from './Data'


function Careers() {
    return (
        <>
        {/*Title Card*/}
        <Title title = "CAREERS" /> 
        <div className = 'headingRegular'>
            <p> No available postings at this time.  </p>
        </div>


        <HeroSection {...homeObjOne} />     
        </>
       
    )
}

export default Careers