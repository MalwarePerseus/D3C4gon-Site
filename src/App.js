import React from 'react';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Achievements from './Components/Achievements';
import Faces from './Components/Faces';
import Footer from './Components/Footer';
import {Scrollbar} from 'react-scrollbars-custom';


const App = () => {

    const styleObj = {
    height: "100vh",
    width: "100vw",
    position: ""
    }
    return(
        <>
            <Scrollbar style={styleObj}>    
                <Navbar />
                <Header />
                <About />
                <Achievements />
                <Faces />
                <Footer />
            </Scrollbar>
        </>
    )
}
export default App;