import React from 'react'
import styled from "styled-components";
import card from '../images/card.jpg';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../style/StartGame.css";

const StartGame = () => {
  return (
    <div className='container'>
      <div>
        <img src={card} alt="card" />
      </div>
      <div className="content">
        <h1>Card Game</h1>
        <button /* onClick={toggle} */>Play Now</button>
      </div>
      <div className="footer">
        <h4>
          All Rights Reserved. Made with&nbsp;&#x1f495;&nbsp;in India
          <div className='social-container'>
            <a href='https://twitter.com/PRATEEKRAVI011' className='twitter'><FaTwitter /></a>
            <a href='https://www.linkedin.com/in/prateek-ravi-1708081a6' className='linkedin'><FaLinkedin/></a>
            <a href='https://github.com/PrateekRavi301' className='github'><FaGithub /></a>
          </div>
        </h4>
      </div>
    </div>
    
  )
}

export default StartGame

