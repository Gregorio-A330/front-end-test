import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardCentered from '../components/CardCentered'



function Detalhe(props) {

    const { data } = props.location

    return (
        <div>
            <Header content={"Detalhe"} />
            {console.log(data.now)}
            <CardCentered
                category={data.now.category}
                description={data.now.description}
                price={data.now.price}
                imageUri={data.now.imageUri}
                restaurantId={data.now.restaurantId}
            />
            <Footer />
        </div>
    )
};
export default Detalhe