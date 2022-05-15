import React, { Fragment } from 'react'

import './Home.css'
import DevIcon from '../images/dev_icon_2x.png'

const Home = () => {

    return (
        <Fragment>
            
            <h1 className='home-title'>Morningbob: Jessie Hon's GitHub Introduction</h1>
            <img className='home-projects-icon' src={DevIcon}/>
            <div className='home-projects-title'>Projects</div>
            <div className='home-projects-intro'>The projects include Android, iOS mobile applications and web pages.</div>
      </Fragment>
    )
}

export default Home