import React from 'react'
import {Card, Spinner} from 'react-bootstrap'
import img from '../Images/clean.jpg'

export default function Home() {
  return (
      <div className='home'>
          <br/>
          <Card className='welcomeQuote' border='light' bg='primary'>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <h4 className='text-center mb-4'>
          {' '}
          “Instead of cleaning the house, I just turn off the lights.” {' '} - Luckily Not Anymore with Smooth Creations &#128526;
        </h4>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Mzansi</cite>
        </footer>
        <br/>
        <Spinner animation="grow" variant="danger" />
      </blockquote>
    </Card.Body>
  </Card>

  
  <Card className='homeCard' border='light' bg="danger" >
  <Card.Header><h4>Cleaning & Gardening Services, No Body Does it Better</h4>   </Card.Header>
      <Card.Body >
        <Card.Text>
          <p>Recently hosted a big event or planning to host one soon but you cannot manage the stress of Cleaning 
          the mess that will be left behind? Recently done renovations, demolished a building, or maybe you are big corporate
          and municipality whooping you with huge bills on their cleaning services so you need an efficient solution which will do 
          cleaning for you without going deep on your pockets?. Do you perhaps hate Mess and Dirt as much as we do?</p>
          <hr/>
          <p>Are you inlove and fascinated by plants and gardens? Do you want build a nice beautiful Mini garden in your yard or you already have one but
              do not have the time to manage it? </p>
              <hr/>
              <p>If the answer to one of the above is yes, well we have got good news. Let Smooth Creations handle all the Mess for you
                  so you can focus more on tasks that matter. Party More because we are here for you.

              </p>
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card className='callUs' border='light' bg='warning'>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p className='text-center mb-4'>
          {' '}
          “Love what you see? So why dont you give us a Call &#128222; or drop us a text so we can call you back"
        </p>
      </blockquote>
    </Card.Body>
  </Card>
      </div>
  )
}
