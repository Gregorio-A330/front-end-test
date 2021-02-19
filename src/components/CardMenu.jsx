import React from "react";
import { Card, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const CardRest = (props) => {

  const now = props
  //console.log(now )

  return (

    <Col sm className="d-flex justify-content-center">
        <Card style={{ width: '18rem', height: "320px", margin: "10px 0px 20px 0px", padding: "0px"}}>
          <Card.Img variant="top" src={props.imageUri} />
          <Card.Body>
            <Card.Title style={{marginTop: "10px"}}>{props.description}</Card.Title>
            <Link to={{
              pathname: '/Detalhe',
              data: { now }
            }}>
              <Button style={{marginTop: "10px"}} variant="warning">Detalhes</Button>
            </Link>
          </Card.Body>
        </Card>
    </Col >

  );
};

export default CardRest;