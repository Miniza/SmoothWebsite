import React from 'react'
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook,faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
      <div className='footer'>
        <p>A clean website for a Cleaning Company</p>
    <br/>
    <FontAwesomeIcon color='red' size='xl' icon={faTwitter} />-<FontAwesomeIcon color='red' icon={faFacebook} />-<FontAwesomeIcon color='red' icon={faLinkedin} />
    <p>© 2022 Copyright: Smooth Creations</p>
      </div>
 
  )
}
