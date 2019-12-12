import React from 'react'
import './rsvp.css'

function RSVP() {
    return (
        <div id="rsvp-form">
            <h1>C &amp; A</h1>
            <h4>Monday, January 18 2021</h4>
            <h4>Wedgewood Wedding</h4>
            <h4>Sierra La Verne</h4>
            <h5>Kindly Replay By 'Enter Date'</h5>
            <hr/>
            <form>
                <label>Name:
                    <input type='text' name='Name'/>
                </label>
                <br/>
                <label>
                    <input type='radio' name='rsvp' value="yes"/>Accept
                    <input type='radio' name='rsvp' value="no"/>Decline
                </label>
                <br/>
                <input type='submit' name='Submit'/>
            </form>
        </div>
    )
}

export default RSVP