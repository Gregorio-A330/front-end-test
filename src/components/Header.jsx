import React from 'react';
import SearchField from 'react-search-field';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function Header(props) {
    let nome = props.content

    return (
        <header>
            {nome === "Menu" || nome === "Detalhe" ?
                <Container>
                    <Link to="/">
                        <Icon name="arrow alternate circle left outline" size='big' style={{ color: "black", position: "absolute" }} />
                    </Link>
                    <h1>{props.content}</h1>
                </Container>



                : <h1>{props.content}</h1>}

        </header>
    )
}

export default Header