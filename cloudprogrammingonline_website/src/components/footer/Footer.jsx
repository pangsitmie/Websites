import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
      <div className='contact_container'>
        <p className='footer__logo'>隨時與我們聯繫</p>
        <div className="footer__socials">
          <p>cloudprogramingservice@gmail.com</p>
          <div className='footer__socials__icons'>
            <a href="mailto:cloudprogramingservice@gmail.com" target='_blank' rel="noreferrer"><MdMail /></a>
            <a href="https://zh-tw.facebook.com/cloudprogrammingonline/" target='_blank' rel="noreferrer"><BsFacebook /></a>
          </div>
        </div>
      </div>

      <div className='footer_menu'>
        <div className='col'>
          <h3>商務合作</h3>
          <a href="/line"><p>LINE吸粉服務</p></a>
          <a href="/search-system"><p>查帳系統</p></a>
        </div>
        <div className='col'>
          <h3>服務平台</h3>
          <a href="/marketing-system"><p>營銷系統</p></a>
          <a href="/xiaodi"><p>小弟外送平台</p></a>
          <a href="/block-store"><p>格子舖</p></a>
        </div>
        <div className='col'>
          <h3>遊戲娛樂</h3>
          <a href="/ipickpro"><p>iPickPro</p></a>
          <a href="/galaxy-city"><p>遊樂城APP建置</p></a>
        </div>
        <div className='col'>
          <a href="/media-design"><h3>多媒體設計</h3></a>
        </div>
        <div className='col'>
          <a href="/about"><h3>關於我們</h3></a>
        </div>
      </div>



      <div className="footer__copyright">
        <small>&copy; 雲程在線 - winprocloud.com</small>
      </div>
    </footer >
  )
}

export default Footer