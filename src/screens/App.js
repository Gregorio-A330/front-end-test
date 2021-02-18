import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

import Restaurant from '../api/Restaurant';



function App() {
    return (
        <div>
            <Header content={"Restaurant"} />
            <Restaurant />
            <Footer />
        </div>
    )
}

export default App