import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cardapio from '../api/Cardapio';


function Menu(props) {

    const {data} = props.location
    
    return(
        <div>
            <Header content={"Menu"} />
            <Cardapio params={data}/>
            <Footer />
        </div>
    )
};
export default Menu