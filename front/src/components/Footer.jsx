import React from 'react'
import { FaInstagramSquare,FaGithubSquare,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <a href='https://www.instagram.com/kaif.jsx' target='_blank' className="insta"><FaInstagramSquare/></a>
        <a href='https://github.com/code-kaif' target='_blank' className="github"><FaGithubSquare/></a>
        <a href='https://www.linkedin.com/in/code-kaif-93543a222/' target='_blank' className="linkedin"><FaLinkedin/></a>
      </div>
      <div className="line">
        <hr />
      </div>
      <h3>Designed and Develop by Kaif.</h3>
    </footer>
  )
}

export default Footer