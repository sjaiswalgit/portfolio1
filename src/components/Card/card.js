import React from 'react'
import passprt from '../../images/passprt.jpg'
import Social from '../Social/social'
export default function Card(){
    return(
        <div className='card'>
            <img src={passprt} alt="Subhash"/>
            <figcaption>Subhash Kumar Jaiswal</figcaption>
            <hr/>
            <button>RESUME</button>
            <button>PROJECTS</button>
            <Social/>
        </div>
    )
}