import React from 'react'
import {Form,Card, Spinner} from 'react-bootstrap'

export default function Contact() {
  return (
      <div>
          <br/>
          <Card className='welcomeQuote' border='light' bg='primary'>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <h4 className='text-center mb-4'>
          {' '}
          Party More, Clean Less With Smooth Creations. So why Dont You Drop us a Text and let us call you back
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
  <Card.Header><h4>Drop Us A Text</h4>   </Card.Header>
      <Card.Body >
        <Card.Text>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Form>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='callUs' border='light' bg='warning'>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p className='text-center mb-4'>
          {' '}
          &#128222;: 066 084 4098
        </p>
      </blockquote>
    </Card.Body>
  </Card>
      </div>

  )
}
