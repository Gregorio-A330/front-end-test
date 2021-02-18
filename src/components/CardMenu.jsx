import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const CardRest = (props) => {



  return (
    
      <Col sm>
        <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src={props.imageUri} />
          <Card.Body>
            <Card.Title>{props.description}</Card.Title>
            <Card.Text>
              Categoria: {props.category}
            </Card.Text>
            <Card.Text>
              Preço: R${props.price} 
            </Card.Text>
            <Link to='/Detalhe'>
              <Button variant="warning">Detalhes</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    
  );
};

export default CardRest;