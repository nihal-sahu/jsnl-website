import React from 'react'
import {Link} from 'react-router-dom'
import './GridLayout.css'
import { MdEmail } from "react-icons/md";
import { AiOutlineMail, AiFillLinkedin} from "react-icons/ai";
import LazyLoad from 'react-lazyload';

function HeroSection({
    lightBg, lightText, headline, 
    img, alt, imgStart,  
    email, linkedIn, linkedInTarget
}) {

    let emailTarget = "mailto:" + email;

    return (
        <>
            <div className = {lightBg ? "home__hero-section" : "home__hero-section darkBg"}>
                <div className="container">
                    <div className="row home__hero-row" style = {{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper"> 
                              
                                <h1 className = {lightText ? 'heading' : 'heading dark'}> {headline} </h1>

                                <div className = "social-icon-link">
                                
                                <a href = {emailTarget}>                                  
                                    <AiOutlineMail />
                                    {email}
                                </a>
                                </div>
                                
                                
                                <div className = "social-icon-link">
                                {linkedIn ? (
                                <a href = {linkedInTarget} target = '_blank'>
                                    <AiFillLinkedin />
                                    {linkedIn}
                                 </a>
                                ) : ('')}
                               
                                </div>
                             
                                
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper">
                                <LazyLoad>
                                <img src= {img} alt = {alt} className="home__hero-img"/>
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
