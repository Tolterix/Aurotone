import React from 'react'
import SubList from './homePageComponents/subList'
import TimerList from './homePageComponents/TimerList'
import './homePage.css'


export default function HomePage() {
    
    return (
        <div className="home-page">
           <SubList />
           <TimerList />
        </div>
    )
}