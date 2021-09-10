import React from 'react'
import HeroSection from '../../HeroSection'
import Title from '../../Title'
import { homeObjOne, homeObjTwo } from './Data'


function SupplyChainManagement() {
    return (
        <>
            {/*Title Card*/}
            <Title title = "SUPPLY CHAIN MANAGEMENT" /> 
            <HeroSection {...homeObjOne} />   
            <HeroSection {...homeObjTwo} />  
        </>
    )
}

export default SupplyChainManagement