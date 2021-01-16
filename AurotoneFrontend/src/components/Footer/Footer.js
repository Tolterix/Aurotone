import React from 'react'
import './Footer.css'
import Logo from './Torkel_Logo.png'
import { StateContext } from '../../State'
import { Link } from 'react-router-dom'

  

export default function Footer() {

  let context = React.useContext(StateContext)

  let footer_siteMap = context.siteMap.map(item =>{
    return <Link key={item} id={item} to={`/${item}`}>{item}</Link>
  })

  return (
    <>
      <footer className='footer_toolbar'>
          
        <div id="links">
          {footer_siteMap}
        </div>
          
        <img src={Logo} alt='Torkel Logo' className="footer_logo"/>
        
        <h3><a id='Twitter' href="https://twitter.com/MontemayorIV">Follow us on Twitter!</a></h3>
      </footer>

      </>
  );
}


  







