import React from 'react'
import passprt from '../../images/passprt.jpg'
import Social from '../Social/social'
export default function Card(){
    return(
        <div className='card'>
            <img src={passprt} alt="Subhash"/>
            <figcaption className='name profile_name'>Subhash Kumar Jaiswal</figcaption>
            <hr/>
            <div className="btn">
                <button className="resume_btn">RESUME</button>
                <button className="projects_btn">PROJECTS</button>
            </div>
            <Social/>
        </div>
    )
}