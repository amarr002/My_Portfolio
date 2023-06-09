import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className='footer'> 
    <div className='socialMedia'>
    <TwitterIcon/>
    <InstagramIcon/>
    <FacebookIcon/>
    <LinkedInIcon/>
    </div>
    <p>&copy; 2023 personal-portfolio.com</p>  
    </div>

  )
}

export default Footer
