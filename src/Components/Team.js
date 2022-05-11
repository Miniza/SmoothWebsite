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
        <Row>
        <Card className='randy' style={{ width: '25rem' }}>
  <Card.Img variant="top" src={randy} />
  <Card.Body>
    <Card.Title>Randy Ndlovu</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
<Card className='randy' style={{ width: '25rem' }}>
  <Card.Img variant="top" src={xolo} />
  <Card.Body>
    <Card.Title>#####</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
<Card className='randy' style={{ width: '25rem' }}>
  <Card.Img variant="top" src={xulu} />
  <Card.Body>
    <Card.Title>#####</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
        </Row>
    </Container>
  )
}
