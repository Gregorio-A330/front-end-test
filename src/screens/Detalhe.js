import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'



function Detalhe(props) {
    return(
        <div>
            <Header content={"Detalhe"} />
           {console.log(props)}
            <Footer />
        </div>
    )
};
export default Detalhe