import React from 'react';
import './roadmap.css';
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { BsFillChatFill } from "react-icons/bs";

const Planned = () => {
    return (
        <div>
            <div className='grid-1'>
                        <h4>Planned(<span>2</span>)</h4>
                        <p>Ideas prioritized for research</p>

                        <div>
                            <hr className='planned-bar'></hr>
                            <div className='roadmap-comments'>
                                <h6>Planned</h6>
                                <h5>More comprehensive reports</h5>
                                <p>It would be great to see a more detailed breakdown
                                    of solutions.
                                </p>
                                <button>Feature</button>
                                <div className='upvotes'>
                                <div className='votes'>
                                    <BsFillArrowUpSquareFill />
                                    <p>123</p>
                                </div>
                                <div className='message'><BsFillChatFill />
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
                            
                            <hr className='planned-bar'></hr>
                            <div className='roadmap-comments'>
                                <h6>Planned</h6>
                                <p>More comprehensive reports</p>
                                <p>It would be great to see a more detailed breakdown
                                    of solutions.
                                </p>
                                <button>Feature</button>
                                <div className='upvotes'>
                                    <div className='votes'>
                                        <BsFillArrowUpSquareFill />
                                        <p>98</p>
                                    </div>
                                    <div className='message'><BsFillChatFill />
                                        <p>2</p>
                                    </div>
                                        
                                </div>
                            </div>

                        </div>
                    </div>
        </div>
    )
}

export default Planned;