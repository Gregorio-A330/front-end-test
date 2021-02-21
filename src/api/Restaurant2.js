import React, { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardRest from '../components/CardRest'
import SearchField from 'react-search-field';

import useAxios from 'axios-hooks'

const Restaurant2 = (props) => {

    const [input, setInput] = useState();

    const [{ data, loading, error }, refetch] = useAxios(
        "https://my-json-server.typicode.com/styme/json-server/restaurant"
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    const updateInput = (search) => {
        const filtered = search
        setInput(filtered);
    }

    return (
        <Container>
            <Container className="d-flex justify-content-center">
                <SearchField
                    placeholder='Search item'
                    onChange={updateInput}
                />
            </Container>
            <Row sm>
                {input === undefined || input == "" ? data.map((restaurante) => <CardRest
                    name={restaurante.name}
                    address={restaurante.address}
                    category={restaurante.category}
                    location={restaurante.location}
                    imageUri={restaurante.imageUri}
                    restaurantId={restaurante.id}
                />)
                    : data.filter((restaurante) => restaurante.name.includes(input) || restaurante.category.includes(input) || restaurante.location.includes(input))
                        .map((restaurante) => <CardRest
                            name={restaurante.name}
                            address={restaurante.address}
                            category={restaurante.category}
                            location={restaurante.location}
                            imageUri={restaurante.imageUri}
                            restaurantId={restaurante.id}
                        />)}
            </Row>
        </Container>
    );
}

export default Restaurant2;