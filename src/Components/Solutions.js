import React from 'react'
import {Card, Spinner, Carousel} from 'react-bootstrap'
import product from '../Images/product'
import product2 from '../Images/product2'
import product3 from '../Images/product3'
import product4 from '../Images/product4'
import product5 from '../Images/product5'
import product6 from '../Images/product6'
import product7 from '../Images/product7'

export default function Solutions() {
  return (
    <div className='home'>
    <br/>
    <Card className='welcomeQuote' border='light' bg='primary'>
<Card.Body>
<blockquote className="blockquote mb-0">
  <h4 className='text-center mb-4'>
    {' '}
    Solutions
  </h4>
  <br/>
  <Spinner animation="grow" variant="danger" />
  <p>Smooth Creations Provides The Following Solutions</p>
  <ul>
      <li>1. Sanitation products for corporate businesses and private properties.</li>
      <li>2. Skilled and Specialists Cleaning Workforce.</li>
      <li>3. Cleaning and Sanitation solutions for private homes and businesses.</li>
      <li>4. Gardening Solutions, products and skilled workforce.</li>
  </ul>
</blockquote>
</Card.Body>
</Card>


<Card className='homeCard' border='light' bg="danger" >
<Card.Body >
  <Card.Text>
   
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={product}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   
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
