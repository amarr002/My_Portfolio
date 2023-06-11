import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/Home.css";
import Navbar from '../Components/Navbar';


function Home() {
  return (
    <div className='home'>
      <div className='about'>
  
      <h2>Hi , My Name is Amar</h2>
      <div className='prompt'>
        <p>A software developer with a passion for learning and creating</p>
        <LinkedInIcon/>
        <EmailIcon/>
        <GitHubIcon/>

      </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>

        <li className='item'>
          <h2>Front-end</h2>
          <span> ReactJS, Redux, HTML, CSS, NPM
              , BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents </span>
        </li>
        <li className='item'>
          <h2>Back-end</h2>
          <span>  Firebase, 
              MySQL, MongoDB,</span>
        </li>
        <li className='item'>
          <h2>Languages</h2>
          <span>JavaScript, Java, Python, C, C++</span>
        </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
