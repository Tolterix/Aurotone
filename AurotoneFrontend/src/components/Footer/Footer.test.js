import { mount } from "enzyme";
import Footer from './Footer'
import StateProvider from '../../State.js'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

describe('footer',() =>{



  let footerWrapper;
  beforeEach(() => {
    footerWrapper = mount(
      <StateProvider>
        <Router>
          <Footer />
        </Router>
      </StateProvider>
    )
    console.log(footerWrapper.debug())
  })



  it('displays footer', ()=>{
    let footer = footerWrapper.find('.footer_toolbar')
    expect(footer).toHaveLength(1)
    

  })

  it('displays all footer links',()=>{
    let contactUs = footerWrapper.find('#Contact-Us');
    let siteMap = footerWrapper.find('#Site-map');
    let information = footerWrapper.find('#Information');
    let twitter = footerWrapper.find('#Twitter');
    

    expect(contactUs).toHaveLength(3)
    expect(siteMap).toHaveLength(3)
    expect(information).toHaveLength(3)
    expect(twitter).toHaveLength(1)

  })

  it('displays the Torkel logo', ()=>{
    let logo = footerWrapper.find('.footer_logo')
    let logoRender = logo.text();
    

    expect(logoRender).toEqual('')
    expect(logo).toHaveLength(1)
  })


})