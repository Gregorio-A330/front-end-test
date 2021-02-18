import React from "react";
import { Card, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const CardRest = (props) => {

  const now = props
  //console.log(now )

  return (

    <Col sm style={{height: "380px"}}>
        <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src={props.imageUri} />
          <Card.Body>
            <Card.Title>{props.description}</Card.Title>


            <Link to={{
              pathname: '/Detalhe',
              data: { now }
            }}>
              <Button variant="warning">Detalhes</Button>
            </Link>
          </Card.Body>
        </Card>
    </Col >

  );
};

export default CardRest;