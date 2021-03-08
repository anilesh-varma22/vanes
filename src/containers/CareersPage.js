import React, { Component } from 'react'
import Careers from '../components/Careers'
import Footer from '../components/Footer'
import Header from '../components/Header'


class CareersPage extends Component {
    
    render() { 
        return ( 
            <div>
                <Header/>
                <Careers/>
                <Footer/>
            </div>
         )
    }
}
 
export default CareersPage;