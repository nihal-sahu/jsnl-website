import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne, homeObjTwo } from './Data'


function ManagementConsulting() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "MANAGEMENT CONSULTING" /> 
            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} />  
        </>
    )
} 

export default ManagementConsulting;