import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/pages/_apartmentpage.scss'
import star_full from '../assets/star_full.svg'
import star_empty from '../assets/star_empty.svg'
import Collapse from '../components/Collapsible'
import NotFound from './NotFound'
import Carrousel from '../components/Carrousel'

function ApartmentPage({ apparts }) {
      const { logementId } = useParams()
      const appart = apparts.find((appart) => appart.id === logementId)

      if (!appart) {
            return <NotFound />
      }

      return (
            <div className="apartment-page">
                  <Carrousel imageCarrousel={appart.pictures} />
                  <div className="apartment__header">
                        <div className="apartment__title">
                              <h1>{appart.title}</h1>
                              <h2>{appart.location}</h2>
                              <div className="tag-container">
                                    {appart.tags.map((tag) => (
                                          <span className="tag" key={tag}>
                                                {tag}
                                          </span>
                                    ))}
                              </div>
                        </div>

                        <div className="apartment__owner">
                              <div className="apartment__owner__details">
                                    <h3>{appart.host.name}</h3>

                                    <img
                                          className="apartment__owner__badge"
                                          src={appart.host.picture}
                                          alt=""
                                    />
                              </div>
                              <div className="apartment__owner_stats">
                                    <div className="badge"></div>

                                    <div className="apartment__owner__stars">
                                          {Array.from({ length: 5 }).map(
                                                (_, index) => (
                                                      <img
                                                            src={
                                                                  index <
                                                                  Math.round(
                                                                        appart.rating
                                                                  )
                                                                        ? star_full
                                                                        : star_empty
                                                            }
                                                            className={
                                                                  index <
                                                                  Math.round(
                                                                        appart.rating
                                                                  )
                                                                        ? 'star_full'
                                                                        : 'star_empty'
                                                            }
                                                            alt="Rating star"
                                                            key={index}
                                                      />
                                                )
                                          )}
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="apartment__description">
                        <Collapse
                              title="Description"
                              descriptionProp={appart.description}
                        />
                        <Collapse
                              title="Équipements"
                              descriptionProp={
                                    <ul className="liste équipements">
                                          {appart.equipments.map(
                                                (equipment, index) => (
                                                      <li key={index}>
                                                            {equipment}
                                                      </li>
                                                )
                                          )}
                                    </ul>
                              }
                        />
                  </div>
            </div>
      )
}

export default ApartmentPage
