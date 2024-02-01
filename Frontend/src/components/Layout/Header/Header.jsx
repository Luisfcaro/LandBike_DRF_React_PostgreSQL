import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

export default function Header() {
  return (
    <div>
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="info">
                <li><FontAwesomeIcon icon={['fa', 'fa-envelope']}></FontAwesomeIcon> lu.fernancar@gmail.com</li>
                <li><FontAwesomeIcon icon={['fa', 'fa-map']}></FontAwesomeIcon> 2º DAW 2023/2024</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <ul className="social-links">
                <li><a href="https://github.com/Luisfcaro"><FontAwesomeIcon icon={['fab', 'fa-github']}></FontAwesomeIcon></a></li>
                <li><a href="https://x.com/Luisfcaro2004" target="_blank"><FontAwesomeIcon icon={['fab', 'fa-x-twitter']}></FontAwesomeIcon></a></li>
                <li><a href="https://www.linkedin.com/in/luisfcaro/"><FontAwesomeIcon icon={['fab', 'fa-linkedin']}></FontAwesomeIcon></a></li>
                <li><a href="https://www.instagram.com/luis_fcaro/"><FontAwesomeIcon icon={['fab', 'fa-instagram']}></FontAwesomeIcon></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="/" className="logo">
                  <h1>LandBike</h1>
                </a>
                {/* <!-- ***** Logo End ***** --> */}
                {/* <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li><a href="/">Home</a></li>
                  <li><a href="/dashboard/stations">Stations</a></li>
                  <li><a href="/dashboard/slots">Slots</a></li>
                  <li><a href="/dashboard/bikes">Bikes</a></li>
                  <li><a href="/dashboard/users">Users</a></li>
                </ul>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
