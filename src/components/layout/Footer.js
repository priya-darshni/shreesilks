import React from 'react'
import { Link } from 'react-router-dom'
import Contact from './../../pages/Contact';
import Policy from './../../pages/Policy';
const Footer = () => {
  return (
    <div className='footer'>
        <h4 className='text-center'>All right Reserved &copy; : Priyadarshni</h4>
        <p className='text-center mt-3'>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/policy">Privacy Policy</Link>
        </p>
    </div>
  )
}

export default Footer