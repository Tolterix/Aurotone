import React from 'react'
import './Header.css'
import Logo from '../../Assets/Logo.png'
import { GlobalContext } from '../../GlobalState'

import DehazeIcon from '@material-ui/icons/Dehaze';
  
const Header = () => {
  let { AppName } = React.useContext(GlobalContext)

  return (
    <header className='header'>

      <div className='header_left'>
        <img src={Logo} alt='Logo' className="app_small_logo"/>
      </div>

      <div className='header_center'>
        <h1 id='title'>
          {AppName}
        </h1>
      </div>

      <div className='header_right'>
        <DehazeIcon/>
      </div>

    </header>
  );
}

export { Header }