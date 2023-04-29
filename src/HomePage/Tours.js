import React from 'react'
import { Container,Col,Row,Button } from 'react-bootstrap'
import classes from './Home.module.css'

const Tours = () => {
  return (
    <div>
        <h1 className={classes.heading}>Tours</h1>
          <Container>
    <Row md={4}>
      <Col>Jul 16 </Col>
      <Col xs={6}> 
DETROIT, MI</Col>
      <Col>
DTE ENERGY MUSIC THEATRE</Col>
      <Button>Buy Tickets</Button>
    </Row>
    <br className={classes.br}/>
    <Row md={4}>
      <Col>Jul 16 </Col>
      <Col xs={6}> 
DETROIT, MI</Col>
      <Col>
DTE ENERGY MUSIC THEATRE</Col>
      <Button>Buy Tickets</Button>
    </Row>
    <br/>
    <Row md={4}>
      <Col>Jul 16 </Col>
      <Col xs={6}> 
DETROIT, MI</Col>
      <Col>
DTE ENERGY MUSIC THEATRE</Col>
      <Button>Buy Tickets</Button>
    </Row>
    <br/>
    <Row md={4}>
      <Col>Jul 16 </Col>
      <Col xs={6}> 
DETROIT, MI</Col>
      <Col>
DTE ENERGY MUSIC THEATRE</Col>
      <Button>Buy Tickets</Button>
    </Row>
  </Container>
    </div>
  
  )
}

export default Tours
