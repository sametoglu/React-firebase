import React , {Component} from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import DemandList from './components/List/DemandList';


export default class Routes extends Component {

  render(){
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene key="signup" component={Signup} title="Signup"/>
          <Scene key="gotolist" component={DemandList} title="DemandList"/>
        </Stack>
      </Router>
    )
  }
}
