import React from "react";
export default function Contact(){
    return(
    <div>
        <div className="get_in_touch">
        <div >
            <p className="connect">Call</p>
            <p className="phone_num">
                +91-8133933438
            </p>
        </div>
        <div >
            <p className="connect">Write</p>
            <a href="mailto:subhashkjaiswal333@gmail.com">subhashkjaiswal333@gmail.com</a>
        </div>
        <div >
            <p className="connect follow">Follow</p>
            <div className="social_platforms">
            <a href="https://www.facebook.com/subhash.jaiswal.9699" target="_blank"  rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.linkedin.com/in/subhash-kumar-jaiswal-2199951a8" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="https://www.instagram.com/subhash.jaiswal.9699" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            </div>
        </div>
        </div>
    </div>
    )
}