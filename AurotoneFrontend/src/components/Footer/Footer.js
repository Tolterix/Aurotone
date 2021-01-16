import React from 'react'
import './Footer.css'
import Logo from '../../Assets/Logo.png'
import { GlobalContext } from '../../GlobalState'
import { Link } from 'react-router-dom'

  

export default function Footer() {
  let context = React.useContext(GlobalContext)

  let footer_siteMap = context.siteMap.map(sitePage =>{
    return (
      <Link key={sitePage} id={sitePage} to={`/${sitePage}`}>
        {sitePage}
      </Link>
    )
  })

  return (
    <footer className='footer'>
        
      <div className='footer_left'>
        {footer_siteMap}
      </div>
        
      <div className='footer_center'>
        <img src={Logo} alt='Logo' className="app_small_logo"/>
      </div>

      <div className='footer_right'>
        <h3>
          <a id='Twitter' href="https://twitter.com">Follow us on Twitter!</a>
        </h3>
      </div>

    </footer>
  );
}


  







