import React from 'react';
import './roadmap.css';
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { BsFillChatFill } from "react-icons/bs";

const InProgress = () => {
    return (
        <div>
            <div className='grid-2'>
                        <h4>In-Progress(<span>2</span>)</h4>
                        <p>Currently being developed</p>

                        <div>
                        <hr className='progress-bar'></hr>
                            <div className='roadmap-comments'>
                                <h6>In Progress</h6>
                                <h5>One-click portfolio generation</h5>
                                <p>Add ability to create professional
                                    looking portfolio from profile.
                                </p>
                                <button>Feature</button>
                                <div className='upvotes'>
                                <div className='votes'>
                                    <BsFillArrowUpSquareFill />
                                    <p>12</p>
                                </div>
                                <div className='message'><BsFillChatFill />
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className='progress-bar'></hr>
                            <div className='roadmap-comments'>
                                <h6>In Progress</h6>
                                <p>Bookmark challenges</p>
                                <p>Be able to bookmark challenges to 
                                    take later on.
                                </p>
                                <button>Feature</button>
                                <div className='upvotes'>
                                <div className='votes'>
                                    <BsFillArrowUpSquareFill />
                                    <p>12</p>
                                </div>
                                <div className='message'><BsFillChatFill />
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
            </div>
        </div>
    )
}

export default InProgress;