import React from 'react';
import SearchField from 'react-search-field';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header'
import Footer from '../components/Footer'

import Restaurant from '../api/Restaurant';



function Home(props) {
    console.log(props)

    let nome = props.content
    function setNome() {
        
    }

    return (
        <div>
            <Header content={"Restaurant"} />
            <Container style={{ paddingRight: "auto",paddingLeft: "25%", marginBottom: "15px",alignContent:"center" }}>
                <SearchField
                    
                    placeholder='Search item'
                    onChange={setNome}
                />
            </Container>
            <Restaurant />

            <Footer />
        </div>
    )
}

export default Home