import React from 'react'
import Logo from '../../Assets/Logo.png'
import { GlobalContext } from '../../GlobalState'

const Landing = () => {
    return (
        <>
            <label id='app_name'>Aurotone</label>
            <label id='app_motto'>Submit a problem,discover a solution!</label>

            <label id='app_purpose'>
                <pre>Have you ever had a problem and you thought\n“there must be a better way”. Here at Aurotone we promote problem solving, and anyone can pose a problem that they wish to be solved or help contribute to solve other problems. If there is already a solution made, anyone can recommend those solutions as well.
                
                </pre>
            </label>

            <a href='login' id='exit_landing'>Discover Your Solution!</a>
            <img className='app_small_logo' alt='image not found'/>
        </>
    )
}

export { Landing }