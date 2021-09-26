// import {isStringEmpty, getRandomRGBColorArray} from './scripts/common/Util';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'css/simple-sidebar.css';
import 'css/theme-common.css';
import 'css/theme-dark.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'components/pages/Home';
import LoginPage from 'components/pages/login/LoginPage';
import DashboardPage from 'components/pages/dashboard/DashBoardPage';
import SystemStatusPage from 'components/pages/system-status/SystemStatusPage';
import MapPage from 'components/pages/map/MapPage';
import SearchPage from 'components/pages/search/SearchPage';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/system-status" component={SystemStatusPage} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route path="/" component={Home} />

      </Switch>
    </Router>
  );
}

export default App;
