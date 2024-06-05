import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faPlug } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from './assets/img/home page.avif';
import logo from './assets/img/Cream Logo.svg';



const App = () => {
  return (
    <div>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div className="nav__logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link">Discover</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link">Solution</a></li>
              <li className="nav__item"><a href="#portfolio" className="nav__link">Product</a></li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-menu'></i>
          </div>
        </nav>
      </header>

      <div className="backside">
        <img src={backgroundImage} alt="Background" />
        <a href="another-page.html">
          <button className="product-button"><FontAwesomeIcon icon={faCircleDot} /></button>
        </a>
        <button className="product-button-1"><FontAwesomeIcon icon={faPlug} /></button>
        <button className="product-button-2"></button>
      </div>

      <div className="content">
        <div className="content-box">
          <h2>Content Box 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        </div>
        <div className="content-box">
          <h2>Content Box 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        </div>
        <div className="content-box">
          <h2>Content Box 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
