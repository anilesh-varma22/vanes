import React, { Component } from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'


class ContactPage extends Component {
    
    render() { 
        return ( 
            <div>
                <Header/>
                <Contact/>
                <Footer/>
            </div>
         )
    }
}
 
export default ContactPage;