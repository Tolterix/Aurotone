import { mount } from "enzyme"
import { getContext, Footer } from './Footer'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import React from 'react'
import { GlobalContext,GlobalProvider } from '../../GlobalState.js'
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

describe('footer',() =>{

  beforeEach(() => {
    createWrapper({siteMap: []})
  })

  afterEach(() => {
    destroyWrapper()
  })
  
  it('displays footer', () => {
    let footer = Wrapper.querySelector('footer.footer')

    expect(footer).not.toEqual({})
  })

  it('displays the footer as three seperate areas', () => {
    let leftArea = Wrapper.querySelector('.footer_left')
    let centerArea = Wrapper.querySelector('.footer_center')
    let rightArea = Wrapper.querySelector('.footer_right')

    expect(leftArea).not.toEqual({})
    expect(centerArea).not.toEqual({})
    expect(rightArea).not.toEqual({})
  })

  it('displays all footer links', () => {
    destroyWrapper()
    createWrapper({siteMap: ['Contact-Us','Site-map','Information']})

    let contactUs = Wrapper.querySelector('#Contact-Us')
    let siteMap = Wrapper.querySelector('#Site-map')
    let information = Wrapper.querySelector('#Information')
    let twitter = Wrapper.querySelector('#Twitter')
    
    expect(contactUs.textContent).toEqual('Contact-Us')
    expect(siteMap.textContent).toEqual('Site-map')
    expect(information.textContent).toEqual('Information')
    expect(twitter.textContent).toEqual('Follow us on Twitter!')
  })

  it('displays the logo', () => {
    let logo = Wrapper.querySelector('.app_small_logo')
    let logoRender = logo.textContent
    
    expect(logoRender).toEqual('')
    expect(logo).not.toEqual({})
  })


})