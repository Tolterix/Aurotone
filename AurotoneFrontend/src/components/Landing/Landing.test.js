import { Landing } from './Landing'
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
            <Landing />
            </Router>
        </GlobalContext.Provider>
        ), Wrapper)
    })
}

function destroyWrapper() {
    document.body.removeChild(Wrapper)
    Wrapper = null
}

function getReactProps(reactComponent) {
    let react_comp_keys = Object.keys(reactComponent)
    let logo_props = ''

    react_comp_keys.forEach(i => {
        const reactPropsRegex = new RegExp('__reactProps\\$.+')

        if (reactPropsRegex.test(i)) {
            logo_props = i
        }
    })

    return reactComponent[`${logo_props}`]
}

describe('Landing Page',() =>{
    beforeEach(() => {
        createWrapper({})
    })

    afterEach(() => {
        destroyWrapper()
    })
  
    it('displays the App name followed by the app motto', () => {
        let app_name = Wrapper.querySelector('label#app_name')
        let app_motto = Wrapper.querySelector('label#app_motto')

        expect(app_name).not.toEqual(null)
        expect(app_motto).not.toEqual(null)
        expect(app_name.textContent).toEqual('Aurotone')
        expect(app_name.nextElementSibling.textContent).toEqual('Submit a problem,discover a solution!')
        expect(app_name.nextElementSibling).toEqual(app_motto)
    })

    it('displays a paragraph describing the apps purpose', () => {
        let app_purpose = Wrapper.querySelector('label#app_purpose')

        expect(app_purpose.textContent.length).toBeGreaterThan(50)
        expect(app_purpose.textContent.length).toBeLessThan(400)
    })

    it('displays a button to go to the home page and the app logo', () => {
        let exit_landing = Wrapper.querySelector('a#exit_landing')
        let app_small_logo = Wrapper.querySelector('img.app_small_logo')
        
        let logo_props = getReactProps(app_small_logo)

        expect(exit_landing).not.toEqual(null)
        expect(app_small_logo).not.toEqual(null)
        expect(exit_landing.textContent).toEqual('Discover Your Solution!')
        expect(exit_landing.nextElementSibling).toEqual(app_small_logo)
        expect(app_small_logo.textContent).toEqual('')
    })


})