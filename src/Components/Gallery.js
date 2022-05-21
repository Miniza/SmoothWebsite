import React from 'react'
import {Card, Carousel} from 'react-bootstrap'
import team from '../Images/team.jpeg'

export default function Gallery() {
  return (
      <div className='home'>
             <br/>
             <br/>
    <Card className='welcomeQuote' border='light' bg='primary'>
<Card.Body>
<blockquote className="blockquote mb-0">
  <h4 className='text-center mb-4'>
    {' '}
    Gallery
  </h4>
</blockquote>
</Card.Body>
</Card>

    <Card className='teamPicCard' border='light' bg="danger" >
    <Card.Body >
      <Card.Text>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={team}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
       
      </Card.Text>
    </Card.Body>
    </Card>
    </div>
  )
}
