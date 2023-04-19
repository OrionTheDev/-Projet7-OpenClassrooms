import React, { useState } from 'react'
import arrow_back from '../assets/arrow_back.png'
import arrow_forward from '../assets/arrow_forward.png'

const Carrousel = ({ imageCarrousel }) => {
      const [indexImage, setIndexImage] = useState(0)

      function decrementImage() {
            setIndexImage(
                  (indexImage + imageCarrousel.length - 1) %
                        imageCarrousel.length
            )
      }

      function incrementImage() {
            setIndexImage((indexImage + 1) % imageCarrousel.length)
      }

      return (
            <div className="image__header">
                  <img
                        className="arrowBack"
                        src={arrow_back}
                        alt=""
                        onClick={decrementImage}
                  />
                  <img
                        className="imgCarrousel"
                        src={imageCarrousel[indexImage]}
                        alt=""
                  />
                  <img
                        className="arrowForward"
                        src={arrow_forward}
                        alt=""
                        onClick={incrementImage}
                  />
                  <div className="counter">{`${indexImage + 1}/${
                        imageCarrousel.length
                  }`}</div>
            </div>
      )
}

export default Carrousel
