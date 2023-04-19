import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Appartement from './ApartmentPage'
import NotFound from './NotFound'
import logements from '../data/logements.json'

function PublicRouter() {
      const [apparts, setApparts] = useState([])

      useEffect(() => {
            setApparts(logements)
      }, [])

      return (
            <>
                  <Routes>
                        <Route element={<Layout />}>
                              <Route
                                    path="/"
                                    element={<Home apparts={apparts} />}
                              />
                              <Route path="/about" element={<About />} />
                              <Route
                                    path="/appartement/:logementId"
                                    element={<Appartement apparts={apparts} />}
                              />
                              <Route path="*" element={<NotFound />} />
                        </Route>
                  </Routes>
            </>
      )
}

export default PublicRouter
