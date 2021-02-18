import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cardapio from '../api/Cardapio';


function Menu(props) {
    return(
        <div>
            <Header content={"Menu"} />
            <Cardapio />
            <Footer />
        </div>
    )
};
export default Menu