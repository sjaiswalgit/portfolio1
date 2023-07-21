import React from "react";
import Social from '../Social/social'
export default function Contact(){
    return(
    <div>
        <div className="phone_num">
            <h5>Call</h5>
            <p>
                +91-8133933438
            </p>
        </div>
        <div className="email">
            <h5>Write</h5>
            <a href="mailto:subhashkjaiswal333@gmail.com">subhashkjaiswal333@gmail.com</a>
        </div>
        <div className="socials">
            <h5>Follow</h5>
            <Social/>
        </div>
    </div>
    )
}