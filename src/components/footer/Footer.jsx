import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
// import { BsInstagram } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import ROSETTA_LOGO from '../../assets/rosetta_logo.avif'

const Footer = () => {
    return (
        <footer>
            <div className='footer_container'>
                <div className='footer_left'>
                    <img src={ROSETTA_LOGO} alt="" />
                    <p>
                        7th Floor, No. 28 Dongxing Road<br />
                        Songshan District,<br />
                        Taipei City,<br />
                        105612 Taiwan (R.O.C.)
                    </p>
                    <div className='footer_icons'>
                        <AiFillInstagram className='footer_icon_item' />
                        <FaFacebookF className='footer_icon_item' />
                        <AiOutlineTwitter className='footer_icon_item' />
                        <FaLinkedinIn className='footer_icon_item' />

                    </div>
                </div>

                <div className='footer_right'>
                    <div className='four_grid'>
                        <div className='footer_col'>
                            <h4>NAVIGATION</h4>
                            <span>
                                <a href="">Homepage</a>
                            </span>
                            <span>
                                <a href="">Pricing</a>
                            </span>
                        </div>
                        <div className='footer_col'>
                            <h4>RESOURCES </h4>
                            <span>
                                <a href="">Case studies</a>
                            </span>
                            <span>
                                <a href="">Blog</a>
                            </span>
                        </div>
                        <div className='footer_col'>
                            <h4>ABOUT US </h4>
                            <span>
                                <a href="">Press</a>
                            </span>
                            <span>
                                <a href="">About</a>
                            </span>
                            <span>
                                <a href="">Partners</a>
                            </span>
                        </div>
                        <div className='footer_col'>
                            <h4>LEGAL </h4>
                            <span>
                                <a href="">Privacy Policy</a>
                            </span>
                            <span>
                                <a href="">Terms & Conditions</a>
                            </span>
                        </div>
                    </div>
                    <div className='four_grid'>
                        <div className='footer_col'>
                            <h4>PRODUCTS </h4>
                            <span>
                                <a href="">Personalized Product Recommenders</a>
                            </span>
                            <span>
                                <a href="">AI Exit-intent Promotions</a>
                            </span>
                            <span>
                                <a href="">Visual AI Preference Analytics</a>
                            </span>
                        </div>
                    </div>
                </div>

            </div>



            <div className="footer__copyright">
                <small>&copy; 雲程在線 - winprocloud.com</small>
            </div>
        </footer >
    )
}

export default Footer