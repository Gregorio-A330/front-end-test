import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const CardRest = (props) => {

  const now = props

  return (

    <Col sm className="d-flex justify-content-center" style={{margin: "25px", padding: "0"}}>
      <Card style={{ width: '20rem', margin: "0px", padding: "0" }}>
        <Card.Img variant="top" src={props.imageUri} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Categoria: {props.category}
          </Card.Text>
          <Card.Text>
            local: {props.address}, <br />{props.location}
          </Card.Text>
          <Link to={{
              pathname: '/Menu',
              data: { now }
            }}><Button variant="warning">MENU</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardRest;