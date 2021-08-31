import {isStringEmpty, getRandomRGBColorArray} from './scripts/common/Util';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/simple-sidebar.css';
import './css/theme-common.css';
import './css/theme-dark.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/login/LoginPage';
import DashboardPage from './pages/dashboard/DashBoardPage';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/search" component={Home} />
        <Route exact path="/system-status" component={Home} />
        <Route exact path="/map" component={Home} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route path="/" component={Home} />

      </Switch>
    </Router>
  );
}

export default App;
