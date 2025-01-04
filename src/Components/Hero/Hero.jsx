import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profileimg.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
<img src={profile_img} alt="" className='photolab'/>
<h1><span>I'm Sushil Upadhyay,</span> frontend developer based in Nepal.</h1>
<p>I am frontend developer from Kathmandu, Nepal with 2+ years of experience in multiple companies like Graycode, LeapFrog and f1 Soft.</p>
<div className="hero-action">
    <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect with me</AnchorLink></div>
    <div className="hero-resume">My resume</div>
</div>
    </div>
  )
}

export default Hero