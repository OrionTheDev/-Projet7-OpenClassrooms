import React from 'react'

function NotFound() {
  return (
    <div className='main'> 
    <p className='notfound'>404</p>
    <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>
    <a href='/' className='backToHome'>Retourner sur la page d’accueil</a>
  
    </div>

  )
}

export default NotFound