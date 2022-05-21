import React from 'react'
import {Card, Row, Container} from 'react-bootstrap'
import randy from '../Images/randy.jpeg'
import xolo from '../Images/xolo.jpeg'
import xulu from '../Images/xulu.jpeg'
import team from '../Images/team.jpeg'

export default function Team() {
  return (
    <Container className='teamContainer'>
        <br/>
        <br/>
        <br/>
        <Row>

<Card className='randy' style={{ width: '25rem' }}>
  <Card.Img variant="top" src={xolo} />
  <Card.Body>
    <Card.Title>Tsidi Makitle</Card.Title>
    <Card.Text>
    Tsidi Makitle is South African born entrepreneur and a woman of power, she is one of the co-founders of smooth creations. Tsidi inspirational words are
      "Success is not final; failure is not fatal; It is the courage to continue that counts"
    </Card.Text>
  </Card.Body>
</Card>

<Card className='randy' style={{ width: '25rem' }}>
  <Card.Img variant="top" src={randy} />
  <Card.Body>
    <Card.Title>Randy Ndlovu</Card.Title>
    <Card.Text>
      Born and Bread in KZN Durban, Randy Ndlovu is one of the co-founders of
      smooth creations. Randy's favourite quote is "When I dare to be powerful
      - to use my strength in the service of my vision, then it becomes less and less
      important whether i am afraid"
    </Card.Text>
  </Card.Body>
</Card>

<Card className='randy' style={{ width: '25rem' }}>
  <Card.Img variant="top" src={xulu} />
  <Card.Body>
    <Card.Title>Tsidiso Makitle</Card.Title>
    <Card.Text>
      Tsidiso Makitle was born and bread in the city of Durban located in the KZN province.She is one of the co-founders of 
      smooth creations.Tsidiso taught herself at an early age to set her goals and focus on them. She always wanted to stay true to herself &
      what she believes in and she belives no one can shift her away from that
    </Card.Text>
  </Card.Body>
</Card>
        </Row>
    </Container>
  )
}
