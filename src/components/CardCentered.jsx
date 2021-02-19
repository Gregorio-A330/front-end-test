import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const CardRest = (props) => {

    const location = props
    const data = {location}

    console.log(data)
    
    return (
        <Container>
            <Card className="text-center" style={{marginBottom: "30px"}}>
                <Card.Header >
                    <h1>{props.description}</h1>
                </Card.Header>
                <Card.Body>
                    <Container>
                        <Card.Img variant="top" src={props.imageUri} style={{ width: "40%" }} />
                    </Container>

                    <Card.Title>Categoria: {props.category}</Card.Title>
                    <Card.Text>
                        Preço: {props.price}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <Link to={{
                        pathname: '/Menu',
                        data: location
                    }}>
                        <Button variant="warning">Voltar</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default CardRest;