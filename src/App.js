import React from 'react';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Achievements from './Components/Achievements';
import Faces from './Components/Faces';
import Footer from './Components/Footer';
import {Scrollbar} from 'react-scrollbars-custom';

const App = () => {
    return(
        <>
            <Scrollbar style={{width: 100 , height: 100 }}>    
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