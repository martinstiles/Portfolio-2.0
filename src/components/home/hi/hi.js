import React from 'react'
import "./hi.style.scss"

const Hi = () => {
    // In case the animations should be turned off after the first time
    // const isNewSession = () => true //sessionStorage.getItem('isNewSession') !== "false"  -  {isNewSession() ? "l1" : ""}
    // sessionStorage.setItem('isNewSession', "false");

    return (
        <div className="hi-container">
            <h1>
                <span id="l1">H</span>
                <span id="l2">i</span>
                &nbsp;
                <span id="l3">t</span>
                <span id="l4">h</span>
                <span id="l5">e</span>
                <span id="l6">r</span>
                <span id="l6">e</span>
                <span id="l6">!</span>
            </h1>
            <h1>
                <span id="l7">I</span>
                <span id="l8">'</span>
                <span id="l9">m</span>
                &nbsp;
                <span className="name">Martin Stiles</span>
            </h1>
            <br />
            <br />
            <h1 id="s1"> 🧑🏼‍🎓 CS Student </h1>
            <h1 id="s2"> 🌍 Web Developer </h1>
            <h1 id="s3"> 🤖 AI Enthusiast </h1>
        </div>
    )
}

export default Hi
