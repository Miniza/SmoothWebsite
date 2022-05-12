import React from 'react'
import {Card, Spinner, Carousel} from 'react-bootstrap'
import product2 from '../Images/product2.jpg'
import product3 from '../Images/product3.jpg'
import product5 from '../Images/product5.jpg'
import product6 from '../Images/product6.jpg'
import prod from '../Images/prod.jpg'

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
  <ul>
      <li>1. Sanitation products for corporate businesses and private properties.</li>
      <li>2. Skilled and Specialists Cleaning Workforce.</li>
      <li>3. Cleaning and Sanitation solutions for private homes and businesses.</li>
      <li>4. Gardening Solutions, products and skilled workforce.</li>
  </ul>
</blockquote>
</Card.Body>
</Card>

<Card className='picsCard' border='light' bg="danger" >
<Card.Body >
  <Card.Text>
   
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={product2}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={product5}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={product3}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={product6}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={prod}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
   
  </Card.Text>
</Card.Body>
</Card>
</div>
  )
}
