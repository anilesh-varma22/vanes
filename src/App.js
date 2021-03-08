import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,Route
} from 'react-router-dom'
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ServicesPage from './containers/ServicesPage';
import CareersPage from './containers/CareersPage';
import ContactPage from './containers/ContactPage';

function App() {
  return (
    <div>
      <Router>
        
<Route exact path='/' component={HomePage}/>
<Route path='/about' component={AboutPage}/>
<Route path='/services' component={ServicesPage}/>
<Route path='/Careers' component={CareersPage}/>
<Route path='/contact' component={ContactPage}/>
        
      </Router>
      
    </div>
  );
}

export default App;
