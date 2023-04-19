import React, { useState } from 'react'
import arrow_down from '../assets/arrow-down.png'
import arrow_up from '../assets/arrow-up.png'

const Description = ({ appart }) => {
      const [showDescription, setShowDescription] = useState(false)
      const [showEquipments, setShowEquipments] = useState(false)

      const toggleDescription = () => {
            setShowDescription((prevState) => !prevState)
      }

      const toggleEquipments = () => {
            setShowEquipments((prevState) => !prevState)
      }

      return (
            <div className="apartment__description">
                  <div className="container__description">
                        <div
                              className="description__header"
                              onClick={toggleDescription}
                        >
                              <p className="title__header">Description</p>
                              <img
                                    src={
                                          showDescription
                                                ? arrow_up
                                                : arrow_down
                                    }
                                    className="arrow_down"
                                    alt="Arrow down"
                              />
                        </div>
                        {showDescription && (
                              <p className="description__content"></p>
                        )}
                  </div>

                  <div className="container__description">
                        <div
                              className="description__header"
                              onClick={toggleEquipments}
                        >
                              <p className="title__header">Équipements</p>
                              <img
                                    src={showEquipments ? arrow_up : arrow_down}
                                    className="arrow_down"
                                    alt="Arrow down"
                              />
                        </div>
                        {showEquipments && (
                              <ul className="description__content">
                                    {appart.equipments.map(
                                          (equipment, index) => (
                                                <li key={index}>{equipment}</li>
                                          )
                                    )}
                              </ul>
                        )}
                  </div>
            </div>
      )
}

export default Description
