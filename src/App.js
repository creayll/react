import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Home from './view/home/index'
import Good from './view/good/index'
import Good_detail from './view/good/good_detail'
import Article from './view/article/index'
import Personal from './view/personal/index'
import Order from './view/personal/order'

import './index.css' 

import { Provider } from 'react-redux'
import store from './redux/store'


const history = require("history").createBrowserHistory()

class App extends Component {
  componentWillMount() {
    document.title = "111";
	}
  render() {
    return (
    	<Provider store={store}>
				<Router history={history}>
						<Switch>
						    <Route exact path="/" component={Home} />
					    	<Route path="/good" component={Good} />
					    	<Route path="/good_detail" component={Good_detail} />
					    	<Route path="/article" component={Article} />
					    	<Route path="/personal" component={Personal}/>
					    	<Route path="/order/:index" component={Order} />
					    	<Route path="/order" component={Order} />
						</Switch>			
				</Router>
			</Provider>
    );
  }
}

export default App;

