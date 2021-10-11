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
import PrivateRoute from 'PrivateRoute';
import dotenv from 'dotenv';
import { printAuthInfo } from 'scripts/common/AuthUtil';
import UserManagementPage from 'components/pages/user/management/UserManagementPage';

dotenv.config();

printAuthInfo();

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/search" component={SearchPage} />
        <PrivateRoute exact path="/system-status" component={SystemStatusPage} />
        <PrivateRoute exact path="/map" component={MapPage} />
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        <PrivateRoute exact path="/user/management" component={UserManagementPage} />
      </Switch>
    </Router>
  );
}

export default App;
