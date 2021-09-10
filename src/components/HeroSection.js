import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'
import LazyLoad from 'react-lazyload';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description,
    buttonLabel, img, alt, imgStart, target, buttonVisible, shortDesc,
}) {
    let newDesc = description.split ('\n').map ((item, i) => <p key={i}>{item}</p>); 
    let newTopLine = topLine.split ('\n').map ((item, i) => <p key={i}>{item}</p>); 
    return (
        <>
            <div className = {lightBg ? "home__hero-section" : "home__hero-section darkBg"}>
                <div className="container">
                    <div className="row home__hero-row" style = {{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper"> 
                                {shortDesc ? ('') : (
                                <div className="top-line"> {newTopLine} </div>)}
                                <h1 className = {lightText ? 'heading' : 'heading dark'}> {headline} </h1>
                                {shortDesc ? (
                                    <div className="top-line"> {newTopLine} </div>
                                ) : 
                                ('')}
                                <p className = {lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}> 
                                {newDesc} </p>
                                
                                <div>
                                {buttonVisible ? (
                                <Link to = {target}> 
                                    <Button buttonSize = 'btn--wide' buttonColor = {lightBg ? 'primary' : 'white'}> 
                                        {buttonLabel} 
                                    </Button>
                                </Link> ) :
                                ('')}
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
