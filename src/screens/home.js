import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header'
import Footer from '../components/Footer'

//import Restaurant from '../api/Restaurant';
import Restaurant2 from '../api/Restaurant2';

function Home() {

    return (
        <div>
            <Header content={"Restaurant"} />
            <Restaurant2 />
            <Footer />
        </div>
    )
}

export default Home