import React from 'react';
import './roadmap.css';
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { BsFillChatFill } from "react-icons/bs";


const Live = () => {
    return (
        <div>
        <div className='grid-2'>
                    <h4>Live(<span>1</span>)</h4>
                    <p>Released features</p>

                    <div>
                    <hr className='live-bar'></hr>
                        <div className='roadmap-comments'>
                            <h6>Live</h6>
                            <h5>Add micro-interactions</h5>
                            <p>Small animations at specific
                                points can add delight.
                            </p>
                            <button>Feature</button>
                            <div className='upvotes'>
                                <div className='votes'>
                                    <BsFillArrowUpSquareFill />
                                    <p>67</p>
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

export default Live;