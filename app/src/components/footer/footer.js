import React from 'react';
import { FaLinkedin, FaFacebook, FaYoutube, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2', // light gray
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100px'
    }}>
      <div className="social-icons" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <a href="https://www.linkedin.com/in/iasonotk/" style={{ fontSize: '32px', margin: '10px' }} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.facebook.com/iasonotk" style={{ fontSize: '32px', margin: '10px' }} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.youtube.com/channel/UCYFqTfqco3egn1RSJViN_Rw" style={{ fontSize: '32px', margin: '10px' }} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://github.com/iasonotk" style={{ fontSize: '32px', margin: '10px' }} target="_blank" rel="noopener noreferrer"><FaGithub /></a>

      </div>
      <p style={{ fontSize: '24px', margin: '10px' }}>&copy; {new Date().getFullYear()} iasonotk</p>
      <p style={{ fontSize: '24px', margin: '10px' }}><a href="https://www.iasonotk.github.io" style={{ color: '#333' }}>iasonotk</a></p>
    </footer>
  );
}

export default Footer;
