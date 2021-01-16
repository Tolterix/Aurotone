import React from 'react'
import './LandingPage.css'
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom'

export default function LandingPage() {

    React.useEffect(() => {
        
    }, [])

    return (
        <div id='LandingPage'>
            <label id='app_name'>
                Aurotone<br />
            </label>
            <label id='app_motto'>
                Submit a problem,<br />
                discover a solution!<br /><br />
            </label>

            <label id='app_purpose'>
                Have you ever had a problem and you thought<br />
                “there must be a better way”. Here at Aurotone we<br />
                promote problem solving, and anyone can pose a<br />
                problem that they wish to be solved or help<br />
                contribute to solve other problems. If there is already<br />
                a solution made, anyone can recommend those<br />
                solutions as well.<br /><br />
            </label>

            <Link to='/' id='exit_landing'>
                Discover Your Solution!<br />
            </Link>

            <img src={Logo} alt='Logo' className="app_small_logo"/>
        </div>
    )
}