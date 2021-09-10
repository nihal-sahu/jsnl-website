import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Industries from './components/pages/Industries/Industries';
import Careers from './components/pages/Careers/Careers';
import News from './components/pages/News/News';
import AboutUs from './components/pages/AboutUs/AboutUs';
import ContactUs from './components/pages/ContactUs/ContactUs';
import ProjectManagement from './components/pages/ProjectManagement/ProjectManagement';
import SupplyChainManagement from './components/pages/SupplyChainManagement/SupplyChainManagement';
import CostEstimating from './components/pages/CostEstimating/CostEstimating';
import ProjectControl from './components/pages/ProjectControl/ProjectControl';
import SoftwareDevelopment from './components/pages/SoftwareDevelopment/SoftwareDevelopment';
import OilAndGas from './components/pages/OilAndGas/OilAndGas';
import RefineriesAndPetrochemicals from './components/pages/RefineriesAndPetrochemicals/RefineriesAndPetrochemicals';
import Pipelines from './components/pages/Pipelines/Pipelines';
import Utilities from './components/pages/Utilities/Utilities';
import Software from './components/pages/Software/Software';
import Mining from './components/pages/Mining/Mining';
import DevelopmentAndProjectEngineering from './components/pages/DevelopmentAndProjectEngineering/DevelopmentAndProjectEngineering';
import ManagementConsulting from './components/pages/ManagementConsulting/ManagementConsulting';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/services' component = {Services}/>
        <Route path = '/industries' component = {Industries} />
        <Route path = '/careers' component = {Careers} />
        <Route path = '/news' component = {News} />
        <Route path = '/about-us' component = {AboutUs} />
        <Route path = '/contact-us' component = {ContactUs} />
        <Route path = '/project-management' component = {ProjectManagement}/>
        <Route path = '/management-consulting' component = {ManagementConsulting} />
        <Route path = '/supply-chain-management' component = {SupplyChainManagement} />
        <Route path = '/development-and-project-engineering' component = {DevelopmentAndProjectEngineering} />
        <Route path = '/cost-estimating' component = {CostEstimating} />
        <Route path = '/project-control' component = {ProjectControl} />
        <Route path = '/software-development' component = {SoftwareDevelopment} />
        <Route path = '/oil-and-gas' component = {OilAndGas} />
        <Route path = '/refineries-and-petrochemicals' component = {RefineriesAndPetrochemicals} />
        <Route path = '/pipelines' component = {Pipelines} />
        <Route path = '/utilities' component = {Utilities} />
        <Route path = '/software' component = {Software} />
        <Route path = '/mining' component = {Mining} />
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
