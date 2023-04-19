import React from 'react'

const Banner = ({ imgbanner, titlebanner }) => {
      return (
            <div className="banner">
                  <img src={imgbanner} alt="" />
                  <h2 className="title-banner">{titlebanner}</h2>
            </div>
      )
}

export default Banner
