import React from 'react';
import { FaLinkedin, FaFacebook, FaYoutube, FaGithub, FaInstagram, FaReddit } from 'react-icons/fa';
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div >
        <a href="https://www.linkedin.com/in/iasonotk/" style={{ fontSize: '32px', margin: '10px' }} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.youtube.com/@iasonotk" style={{ fontSize: '32px', margin: '10px' }} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://github.com/iasonotk" style={{ fontSize: '32px', margin: '10px' }} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.facebook.com/iasonotk" style={{ fontSize: '32px', margin: '10px' }} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.instagram.com/iasonotk/" style={{ fontSize: '32px', margin: '10px' }} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.reddit.com/user/iasonotk" style={{ fontSize: '32px', margin: '10px' }} target="_blank" rel="noopener noreferrer"><FaReddit /></a>
              </div>
      <p>&copy; {new Date().getFullYear()} iasonotk</p>
    </footer>
  );
}

export default Footer;
