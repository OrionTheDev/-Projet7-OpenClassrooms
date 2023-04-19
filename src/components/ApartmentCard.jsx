import React from 'react'
import '../styles/components/_apartmentcard.scss'
import { Link } from 'react-router-dom'
const Lodgement = ({ titleCard, picCard, appartId }) => {
      const styleCards = {
            background: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8) 100%), url("${picCard}")`,
            backgroundSize: 'cover',
            borderRadius: '25px',
      }
      return (
            <Link
                  to={`/appartement/${appartId}`}
                  className="lodgement"
                  style={styleCards}
            >
                  <div className="container__card">
                        {' '}
                        <h3>{titleCard}</h3>
                  </div>
            </Link>
      )
}

export default Lodgement
