import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';


function Footer() {
  const style = { color: "white", fontSize: "1.5em" }

  return (
    <div className='footer-container'>
    
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src = {process.env.PUBLIC_URL + '/images/JSNL-logo.svg'} 
              onMouseOver={e => (e.currentTarget.src = '/images/JSNL-logo-inverted.svg')} 
              onMouseOut = {e => (e.currentTarget.src = '/images/JSNL-logo.svg')} width = '118.25' height = '80' />
            </Link>
          </div>
          <small className='website-rights'>JSNL © 2021</small>
          {/* <div className='social-icons'>
            <a
              className='social-icon-link'
              href = "https://linkedin.com/in/sahunihal"
              target='_blank'
              aria-label='LinkedIn'
            >
               <AiFillLinkedin style = {style}/>
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;