import React from 'react';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Achievements from './Components/Achievements';
import Faces from './Components/Faces';
import Footer from './Components/Footer';

const App = () => {
    return(
        <>
            <Navbar />
            <Header />
            <About />
            <Achievements />
            <Faces />
            <Footer />
        </>
    )
}
export default App;