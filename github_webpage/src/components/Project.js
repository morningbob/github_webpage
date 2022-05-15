import React, { Fragment } from 'react'

import './Project.css'
import To_PDF_01 from '../images/to_pdf_01.jpg'
import To_PDF_02 from '../images/to_pdf_06.jpg'
import To_PDF_03 from '../images/to_pdf_08.jpg'
import Signal_01 from '../images/signal_01.jpeg'
import Signal_02 from '../images/signal_02.jpeg'
import BLEChat_01 from '../images/01_BLEChat_android.jpg'
import BLEChat_02 from '../images/02_BLEChat_android.jpg'
import BLEChat_03 from '../images/05_BLEChat_android.jpg'
import Peer_01 from '../images/peerConnect_01.jpg'
import Peer_02 from '../images/peerConnect_04.jpg'
import Peer_03 from '../images/peerConnect_07.jpg'
import To_PDF_Icon from '../images/pdf.png'
import ChatIcon from '../images/chat.png'
import Peer_Icon from '../images/peerConnect_temp_logo.jpeg'
import Signals_Icon from '../images/signals_temp_logo.jpeg'
// may load the screenshots here

const SignalScreenshots = [Signal_01, Signal_02]
const PDFScreenshots = [To_PDF_01, To_PDF_02, To_PDF_03]
const BLEScreenshots = [BLEChat_01, BLEChat_02, BLEChat_03]
const PeerScreenshots = [Peer_01, Peer_02, Peer_03]
const Screenshots = [PDFScreenshots, SignalScreenshots, BLEScreenshots, PeerScreenshots, PDFScreenshots]
const Icons = [To_PDF_Icon, Signals_Icon, ChatIcon, Peer_Icon]

const Project = (props) => {

    let screenshotsContent = Screenshots[props.passedProject.id - 1].map ((screenshot) => {
        return <img className='project-screenshot' src={screenshot} />
    })

    return (
        <Fragment>
            <div className='project-container'>
            <img className='project-icon' src={Icons[props.passedProject.id - 1]}/>
            <div className='project-title'>{props.passedProject.name}</div>
            <div className='project-description'>{props.passedProject.description}</div>
            <div className='project-details'>
                <div className='project-details-platform-title'>Platform:</div>
                <div className='project-details-platform-content'>{props.passedProject.platform}</div>
                <div className='project-details-language-container'>
                    <div className='project-details-language-title'>Language:</div>
                    <div className='project-details-language-content'>{props.passedProject.language}</div>
                </div>
                <div className='project-details-repo-container'>
                    <div className='project-details-repo-title'>Repository:  </div>
                    <a href={props.passedProject.repo} className='project-details-repo-content'>{props.passedProject.repo}</a>
                </div>
            </div>
            <div className='project-screenshots'></div>
            <div className='project-screenshot-container'>
            <div className='project-screenshot-image-container'>
                {screenshotsContent}
            </div>
            <div className='project-screen-description'>{props.passedProject.shotsDescriptions}</div>
            </div>
            </div>

        </Fragment>
    )
}

export default Project