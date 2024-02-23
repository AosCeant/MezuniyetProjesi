import './App.css'
import logo from "./assets/aosceant.png"
import logo2 from "./assets/uretken.jpg"

import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/mehmet-ya%C4%9F%C4%B1z-g%C3%BClen/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/mehmetyagizgulen/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://github.com/aosceant" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}

function App() {

  return (
    <>
      <header className='header'>
        <div className="top-left">
          <img src={logo} alt="AosCeant" />
          <div className='nav-heading'>Meram Belediye Ara Birim Sayfası</div>
        </div>
        <div className="top-right">
          <a href="#">Anasayfa</a>
          <a href="https://www.meram.bel.tr/e-imar">İmar Sorgulama</a>
          <a href="https://www.meram.bel.tr/e-belediye-hizmetleri">E-Belediye</a>
        </div>
      </header>

      <main className='main'>
        <div className="main-container">
          <div className="main-left">
            <img src={logo2} alt="logo" className='uretken' />
          </div>
          <div className="main-right">
            <p className='main-p'>
              Her Şeyi Tek Tıkta Halledin!
            </p>
            <p className='main-p'>
              İhtiyacınız Olan Hizmeti Aşağıdan Seçiniz
            </p>
            <button className='main-button'><a href="https://www.meram.bel.tr/ihaleler">İhaleler</a></button>
            <button className='main-button'><a href="https://www.meram.bel.tr/e-belediye-hizmetleri">E-Belediye</a></button>
          </div>
        </div>
        <div className="about-me">
          <h1 className='about-heading'>About Me</h1>
          <p className="text text1">
            My name is Mehmet Yağız Gülen a.k.a AosCeant
          </p>
          <p className="text text2">
            Mezuniyet projemi sizlere sunmaktan onur duyarım.
          </p>
          <SocialLinks />
        </div>
      </main>

      <footer className='footer'>
        <p className='copyright'>Copyright © AosCeant2024</p>
      </footer>
    </>
  )
}

export default App
