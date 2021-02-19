import React from 'react';
import axios from 'axios';
import CardRest from '../components/CardRest'
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Restaurant extends React.Component {
  
  constructor(props) {
    super(props);
    const local = this.props
    console.log(local)
    this.local = local
  }
  
  
  state = {
    restaurantes: []
  }

  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/styme/json-server/restaurant`)
      .then(res => {
        const restaurantes = res.data;
        this.setState({ restaurantes });
      })
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.restaurantes.map(restaurante => <CardRest
              name={restaurante.name}
              address={restaurante.address}
              category={restaurante.category}
              location={restaurante.location}
              imageUri={restaurante.imageUri}
              restaurantId={restaurante.id}
            />)}
          </Row>
        </Container>
      </div>
    )
  }
}