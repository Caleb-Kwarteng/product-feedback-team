import React from 'react';
import './roadmap.css';


const Nav = () => {
    return(
        <div>
            <div className='roadmap-nav'>
                <div>
                    <button>Go back</button>
                    <h4>Roadmap</h4>
                </div>
                <div>
                    <button className='nav-feedback-btn'>Add Feedback</button>
                </div>
            </div>
        </div>
    )
}

export default Nav;