import React, { useState } from 'react'
import {Form,Card, Spinner,Button} from 'react-bootstrap'
import emailjs from 'emailjs-com'
import swal from 'sweetalert'

export default function Contact() {

  const sendEmail = e => {
     e.preventDefault();
     emailjs.sendForm('service_va3pufd','template_p95nd8c',e.target,'L_1Utg623Kx4a0DfR')
     .then(swal({
       title:"Form Submitted",
       icon: "success"
      })).catch(swal({
        title:"Form Submitted",
        icon: "success"
      }));
  }
  return (
      <div>
          <br/>
          <br/>
          <Card className='welcomeQuote' border='light' bg='primary'>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <h4 className='text-center mb-4'>
          {' '}
          Party More, Clean Less With Smooth Creations. So why Dont You Drop us a Text and let us call you back
        </h4>
        <Spinner animation="grow" variant="danger" />
      </blockquote>
    </Card.Body>
  </Card>

    
  <Card className='homeCard' border='light' bg="danger" >
  <Card.Header><h4>Drop Us A Text</h4>   </Card.Header>
      <Card.Body >
        <Card.Text>
        <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                 type="text"
                 name = "mobileNumber"
                placeholder="(+27) 0xx xxx xxxx"
                 />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                type="email" 
                name="mail"
                placeholder="name@example.com" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3}
                 name = "message"
                placeholder="Start typing your message here..." />
            </Form.Group>
             <Button type="submit" variant='outline-light'>Submit</Button>
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
          <br/>
          &#128231;:info@smoothcreations.co.za || support@smoothcreations.co.za
        </p>
      </blockquote>
    </Card.Body>
  </Card>
      </div>

  )
}
