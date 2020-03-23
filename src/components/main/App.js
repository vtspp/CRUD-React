import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../../components/main/App.css'
import { Switch, Route, Redirect} from 'react-router-dom'
import UserCrud from '../user/UserCrud'
import UserEstatistic from '../estatistic/UserEstatistic'

import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Home from '../home/Home'
import Footer from '../template/Footer'

export default props =>
    <div className="App">
      <Logo/>
      <Nav/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/users" component={UserCrud}/>
      <Route exact path="/estatistic" component={UserEstatistic}/>
      <Redirect from="*" to="/"/>
      </Switch>
      <Footer/>
    </div>