import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const CardRest = (props) => {

    //console.log(props)
    
    return (
        <Container>
            <Card className="text-center">
                <Card.Header >
                    <h1>{props.description}</h1>
                </Card.Header>
                <Card.Body>
                    <Container>
                        <Card.Img variant="top" src={props.imageUri} style={{ width: "50%" }} />
                    </Container>

                    <Card.Title>Categoria: {props.category}</Card.Title>
                    <Card.Text>
                        Preço: {props.price}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <Link to={{
                        pathname: '/Menu',
                        data: props.restaurantId
                    }}>
                        <Button variant="warning">Voltar</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default CardRest;