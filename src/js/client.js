import React from 'react';
import ReactDOM from 'react-dom';

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Setting from "./pages/Setting";
import Contact from "./pages/Contact";

import {Router, Route, IndexRoute, hashHistory } from "react-router"

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Featured}></IndexRoute>
			<Route path="setting" component={Setting}></Route>
			<Route path="contact" component={Contact}></Route>
		</Route>
	</Router>,	
app);
