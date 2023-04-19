import React from 'react'
import Banner from '../components/Banner'
import ApartmentCard from '../components/ApartmentCard'
import ImgBanner from '../assets/banner-home.webp'

function Home({ apparts }) {
      return (
            <div className="home">
                  <Banner
                        imgbanner={ImgBanner}
                        titlebanner="Chez vous, partout et ailleurs"
                  />
                  <div className="cards">
                        {apparts.map((appart) => (
                              <ApartmentCard
                                    key={appart.id}
                                    titleCard={appart.title}
                                    picCard={appart.cover}
                                    appartId={appart.id}
                              />
                        ))}
                  </div>
            </div>
      )
}

export default Home
