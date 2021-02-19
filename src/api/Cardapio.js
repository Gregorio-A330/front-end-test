import React from 'react';
import axios from 'axios';
import CardMenu from '../components/CardMenu'
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Cardapio extends React.Component {

  constructor(props) {
    super(props);

    const teste = this.props.params.now
    console.log(teste)
    if (typeof (teste) != "undefined") {
      // Recebe os parametros do cardRest
      const local = teste
      this.local = local
    } else { 
      // Recebe os parametros do cardCentered
      console.log("duas horas tentanto corrigir essa lógica")
      const local = this.props.params
      this.local = local
    }

  }


  state = {
    Cardapios: []
  }

  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/styme/json-server/menu`)
      .then(res => {
        const Cardapios = res.data;
        this.setState({ Cardapios });
      })
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.Cardapios.filter((Cardapios) => Cardapios.restaurantId === this.local.restaurantId)
              .map(Cardapio => <CardMenu
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