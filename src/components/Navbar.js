import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components';
import logo from '../assets/logoAlt.webp';
import instagramLogo from '../assets/instagram-250.svg'



const Logo = () => {
  return (
    <div className='Logo'  style={{height: '100%'}}>
      <img src={logo} style={{height: '100%'}}/>
    </div>
  )
};

const Hamburger = () => {
  const [highlight, setHighlight] = useState(false);

  const hamburgerHover = (e, hover) => {
    setHighlight(hover);
  }

  const name = highlight ? 'Hamburger Hover' : 'Hamburger';
  const instaLink ='https://www.instagram.com/s.connellguitarrepair/';
  
  return(
      <img className={name} 
      onMouseEnter={(e) => hamburgerHover(e, true)} 
      onMouseLeave={(e) => hamburgerHover(e, false)} 
      onClick={()=> window.open(instaLink, "_blank")}
      src={instagramLogo}/>
  )
}

export default function Navbar() {
  const [instagramHighlight, setInstagramHighlight] = useState(false);

  const clickHandler = (link) => {
    if (link === 'Home') {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } else {
      const section = document.getElementById(link);
      if (section) section.scrollIntoView({ behavior: 'smooth'});
    }
  }

  const instagramHover = (hover) => {
    setInstagramHighlight(hover);
  }

  const highlightColor = instagramHighlight ? '' : null;

  return (
    <Container id='Navbar'>
      <Logo onClick={() => clickHandler('Home')}/>
      <Hamburger/>
      <nav>
        <LinkContainer className='Links'>
          <li><a onClick={() => clickHandler('Services')}>Services</a></li>
          <li><a onClick={() => clickHandler('Contact')}>Contact</a></li>
          <li><a href="https://www.instagram.com/s.connellguitarrepair/" onMouseOver={() => {instagramHover(true)}} onMouseLeave={() => {instagramHover(false)}}><InstagramIcon htmlColor={highlightColor} fontSize='inherit'/></a></li>
        </LinkContainer>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  top:0;
  left:0;
  background: #faf4d8;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.2em;
  padding-left: 1em;
  border-radius: 1em 0 0 1em;
  font-size: 2em;

  li {
    list-style: none;
  }

  a {
    text-decoration: underline rgba(0,0,0,0);
    color: #584330;
    margin: 0 20px 0 0;
    transition: all ease 1s;
    font-size: 1.2em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:hover {
    text-decoration: underline rgba(0,0,0,1);
  }
`;