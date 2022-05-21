import React from 'react'
import {Card, Spinner} from 'react-bootstrap'

export default function Products() {
  return (
    <div>
        <br/>
        <br/>
<Card className='welcomeQuote' border='light' bg='primary'>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <h4 className='text-center mb-4'>
          About Us
        </h4>
        <br/>
        <Spinner animation="grow" variant="warning" />
      </blockquote>
    </Card.Body>
  </Card>
  <Card className='homeCard' border='light' bg="danger" >
      <Card.Body >
        <Card.Text>
          <p>Smooth creations pty ltd is a cleaning, gardening service and product enterprise founded and owned by 3 yOung, talented and hardworking black women.
              The company was founded in the year 2021. The company provides services to both private and public companies including households.
          </p>
          <hr/>
          <p>The mission of Smooth Creations Pty Ltd is to create and provide affordable cleaning and gardening solutions for corporate businesses and private properties,
              we achieve this by providing high quality cleaning and gardening services carried by highly skilled and highly trained personnel.</p>
          <p> The company is 100% black owned </p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
