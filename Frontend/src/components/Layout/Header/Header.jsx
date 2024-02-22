import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import AuthContext from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const { user, isAuth, isAdmin, logout } = useContext(AuthContext);

  const redirects = {

    home: () => navigate('/home'),
    dashboard_stations: () => navigate('/dashboard/stations'),
    dashboard_slots: () => navigate('/dashboard/slots'),
    dashboard_bikes: () => navigate('/dashboard/bikes'),
    dashboard_rents: () => navigate('/dashboard/rents'),
    dashboard_incidents: () => navigate('/dashboard/incidents'),

    stations: () => navigate('/stations'),
    notifications: () => navigate('/notifications'),

    login: () => navigate('/login'),
    register: () => navigate('/register'),
  }

  // const isUser = isAuth ? 

  const isAdminUser = isAuth && isAdmin ? <ul className="nav">
    <li onClick={() => redirects.home()}><a>Home</a></li>
    <li onClick={() => redirects.dashboard_stations()}><a >Admin Stations</a></li>
    <li onClick={() => redirects.dashboard_slots()}><a >Admin Slots</a></li>
    <li onClick={() => redirects.dashboard_bikes()}><a >Admin Bikes</a></li>
    <li onClick={() => redirects.dashboard_rents()}><a >Admin Rents</a></li>
    <li onClick={() => redirects.dashboard_incidents()}><a >Admin Incidents</a></li>
    <li onClick={() => logout()}><a >Logout</a></li>
  </ul> : <ul className=""></ul>

  const isAuthUser = isAuth && !isAdmin ? <ul className="nav">
    <li onClick={() => redirects.home()}><a>Home</a></li>
    <li onClick={() => redirects.stations()}><a >Stations</a></li>
    <li onClick={() => redirects.notifications()}><a >Notifications</a></li>
    <li onClick={() => logout()}><a >Logout</a></li>
  </ul> : <ul className=""></ul>

  const isNotAuthUser = !isAuth ? <ul className="nav">
    <li onClick={() => redirects.home()}><a>Home</a></li>
    <li onClick={() => redirects.login()}><a >Login</a></li>
    <li onClick={() => redirects.register()}><a >Register</a></li>
  </ul> : <ul className=""></ul>






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
                <a href="/home" className="logo">
                  <h1>LandBike</h1>
                </a>
                {isAdminUser}
                {isAuthUser}
                {isNotAuthUser}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
