import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const CardRest = (props) => {
  return (

    <Col sm>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imageUri} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Categoria: {props.category}
          </Card.Text>
          <Card.Text>
            local: {props.address}, <br />{props.location}
          </Card.Text>
          <Link to="Menu"><Button variant="warning">MENU</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardRest;