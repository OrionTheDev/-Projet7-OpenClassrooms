import React, { useState } from 'react'
import arrow_down from '../assets/arrow-down.png'
import arrow_up from '../assets/arrow-up.png'

const Collapse = ({ appart, descriptionProp, title }) => {
      const [showDescription, setShowDescription] = useState(false)

      const toggleDescription = () => {
            setShowDescription((prevState) => !prevState)
      }

      return (
            <div className="apartment__description">
                  <div className="container__description">
                        <div
                              className="description__header"
                              onClick={toggleDescription}
                        >
                              <p className="title__header">{title}</p>
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
                              <p className="description__content">
                                    {descriptionProp
                                          ? descriptionProp
                                          : appart.description}
                              </p>
                        )}
                  </div>
            </div>
      )
}

export default Collapse
