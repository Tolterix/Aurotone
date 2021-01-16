import React from 'react'
import './Header.css'
import Logo from './Torkel_Logo.png'
import { AppBar, Toolbar, } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

  
  export default function Header() {
    
    return (
      <AppBar className="header_appBar">
        <Toolbar className="header_toolbar">
          <img src={Logo} alt='Torkel Logo' className="header_logo"/>
          <h1 id='title'>Torkel</h1>
          <div className="header_icon">
          <ShoppingCartIcon/>
          <DehazeIcon/>
          </div>
          
         
        </Toolbar>
      </AppBar>
    );
  }
  







