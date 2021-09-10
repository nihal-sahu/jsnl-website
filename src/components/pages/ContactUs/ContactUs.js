import React from 'react'
import Title from '../../Title'
import GridLayout from '../../GridLayout'
import { gridLayoutOne, gridLayoutTwo, gridLayoutThree } from './Data'


function ContactUs() {
    return (
        <>
        {/*Title Card*/}
        <Title title = "CONTACT US" /> 
        <div className = 'headingRegular'>
            <p> We'd love to speak with you!</p>
        </div>

        <GridLayout {...gridLayoutOne} />
        <GridLayout {...gridLayoutTwo} />
        <GridLayout {...gridLayoutThree} />
        </>
       
    )
}

export default ContactUs