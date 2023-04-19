import React from 'react'
import { NavLink } from 'react-router-dom'
import logoHeader from '../assets/logo.webp'

function Navigation() {
      return (
            <div className="header">
                  <NavLink to="/" className="header__logo">
                        <img
                              src={logoHeader}
                              alt="logo"
                              class="no-border-radius"
                        />
                  </NavLink>
                  <nav>
                        <ul className="header__nav">
                              <li>
                                    <NavLink
                                          to="/"
                                          className={({ isActive }) =>
                                                isActive
                                                      ? 'active-link'
                                                      : undefined
                                          }
                                    >
                                          Accueil
                                    </NavLink>
                              </li>
                              <li>
                                    <NavLink
                                          to="/about"
                                          className={({ isActive }) =>
                                                isActive
                                                      ? 'active-link'
                                                      : undefined
                                          }
                                    >
                                          A Propos
                                    </NavLink>
                              </li>
                        </ul>
                  </nav>
            </div>
      )
}

export default Navigation
