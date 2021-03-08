import React, { Component } from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'


class AboutPage extends Component {
    
    render() { 
        return ( 
            <div>
                <Header/>
                <About/>
                <Footer/>
            </div>
         )
    }
}
 
export default AboutPage;