import React, { useState ,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../Styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import "../Styles/styledbtn.css";

function Navbar() {
    const [expandNavbar,SetExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        SetExpandNavbar(false);
    },[location])

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
    <div className='toggleButton'>
    <button onClick={() => {SetExpandNavbar((prev) => !prev ); }}>
        <ReorderIcon/>
    </button>
    </div>
    <div className='links'>
    <Link to="/" ><button className='styledbtn'>Home</button></Link>
    <Link to="/projects"><button className='styledbtn'>Projects</button></Link>
    <Link to="/experience"><button className='styledbtn'>Experience</button></Link>
    </div>
      
    </div>
  )
}

export default Navbar
