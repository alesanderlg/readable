import React from 'react'

import upVote from '../../assets/icons/arrow-up-30.png'
import downVote from '../../assets/icons/arrow-down-30.png'

const VoteScore = ({ voteScore, id, handleToggleVoteScore }) =>{
    return (
        <div style={{float: 'right'}}>
            <span>Vote</span>
            <button className='btn btn-link' onClick={() => handleToggleVoteScore(id, 'upVote')}>
                        <img src={upVote} alt=""/>
            </button>
            <span>{voteScore}</span>
            <button className='btn btn-link' onClick={() => handleToggleVoteScore(id, 'downVote')}>
                <img src={downVote} alt=""/>
            </button>  
        </div>
    )
}

export default VoteScore