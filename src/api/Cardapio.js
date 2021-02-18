import React from 'react';
import axios from 'axios';
import CardMenu from '../components/CardMenu'
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Cardapio extends React.Component {
  state = {
    Cardapios: []
  }

  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/styme/json-server/menu`)
      .then(res => {
        const Cardapios = res.data;
        this.setState({ Cardapios });
        console.log(res)
      })
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.Cardapios.map(Cardapio => <CardMenu
              description={Cardapio.description}
              price={Cardapio.price}
              category={Cardapio.category}
              restaurantId={Cardapio.restaurantId}
              imageUri={Cardapio.imageUri}
              prm={Cardapio.id}
            />)}
          </Row>
        </Container>
      </div>
    )
  }
}