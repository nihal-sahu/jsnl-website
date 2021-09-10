import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne, homeObjTwo } from './Data'


function ProjectManagement() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "PROJECT MANAGEMENT" /> 
            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} />  
        </>
    )
}

export default ProjectManagement