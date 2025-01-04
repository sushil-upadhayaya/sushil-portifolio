import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-top">
        <div className="footer-top-left">
        
            <img src={footer_logo} alt="" />
            <div className='footer-logoname'>Sushil</div>
            <p className='footer-content'>I am a frontend developer from, Nepal with 2+ year experience in companies like Graycode , LeafFrog and f1Soft. </p>

        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='enter your email' />
            </div>
            <div className='footer-subscribe'>Subscribe</div>
        </div>
    </div>
    <hr/>
    <div className="footer-bottom">
        <p className="footer-bottom-left"> © 2024 Sushil Upadhyay. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services </p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
    </div>
    </div>
  )
}

export default Footer