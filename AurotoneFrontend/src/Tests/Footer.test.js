import Footer from '../components/Footer/Footer'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import React from 'react'
import { GlobalContext } from '../GlobalState.js'
import { BrowserRouter as Router } from 'react-router-dom'

let Wrapper
function createWrapper(testValue) {
  Wrapper = document.createElement('div')
  document.body.appendChild(Wrapper)
  act(() => {
    ReactDOM.render((
      <GlobalContext.Provider value={testValue} >
        <Router>
          <Footer />
        </Router>
      </GlobalContext.Provider>
    ), Wrapper)
  })
}

function destroyWrapper() {
  document.body.removeChild(Wrapper)
  Wrapper = null
}

describe('footer', () =>{

  beforeEach(() => {
    createWrapper({siteMap: []})
  })

  afterEach(() => {
    destroyWrapper()
  })
  
  it('displays footer', () => {
    let footer = Wrapper.querySelector('footer.footer')

    expect(footer).not.toEqual(null)
  })

  it('displays the footer as three seperate areas', () => {
    let leftArea = Wrapper.querySelector('.footer_left')
    let centerArea = Wrapper.querySelector('.footer_center')
    let rightArea = Wrapper.querySelector('.footer_right')

    expect(leftArea).not.toEqual(null)
    expect(centerArea).not.toEqual(null)
    expect(rightArea).not.toEqual(null)
  })

  it('displays all footer links', () => {
    /*
      testing this component when the state is null
    */

    destroyWrapper()
    createWrapper({siteMap: ['Contact-Us','Site-map','Information']})

    let contactUs = Wrapper.querySelector('#Contact-Us')
    let siteMap = Wrapper.querySelector('#Site-map')
    let information = Wrapper.querySelector('#Information')
    let twitter = Wrapper.querySelector('#Twitter')
    
    expect(contactUs.textContent).toEqual('Contact-Us')
    expect(siteMap.textContent).toEqual('Site-map')
    expect(information.textContent).toEqual('Information')
    expect(twitter.textContent).toEqual('')
    expect(twitter).not.toEqual(null)
  })

  it('displays the logo', () => {
    let logo = Wrapper.querySelector('img.app_small_logo')
    let logoRender = logo.textContent
    
    expect(logoRender).toEqual('')
    expect(logo).not.toEqual(null)
  })


})