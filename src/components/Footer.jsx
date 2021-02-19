import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
        <Container style={{margin: "0"}}>
            <footer>
                <p>Copyright &copy; by Gabriel Couto {new Date().getFullYear()}</p>
            </footer>
        </Container>
    )
}

export default Footer;