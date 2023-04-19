import React from 'react'
import logoFooter from '../assets/logo-footer.webp'

function Footer() {
      return (
            <footer>
                  <div className="logo-footer">
                        <img src={logoFooter} alt="logo footer" />
                  </div>
                  <p>2020 Kasa. All right reserved</p>
            </footer>
      )
}

export default Footer
