import React from 'react'
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook,faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
      <div className='footer'>
        <p>A clean website for a Cleaning Company</p>
    <hr/>
    <FontAwesomeIcon color='white' size='xl' icon={faTwitter} />-<FontAwesomeIcon color='white' icon={faFacebook} />-<FontAwesomeIcon color='white' icon={faLinkedin} />
    <br/>
    <p>© 2022 Copyright: Smooth Creations</p>
      </div>
 
  )
}
