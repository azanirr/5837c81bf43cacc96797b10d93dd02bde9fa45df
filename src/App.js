import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import DefaultPage from './pages/DefaultPage';

function App() {
  
	return (
		<Router>
     		<Switch>
				<Route exact path="/">
    				<DefaultPage />
        		</Route>
			</Switch>
		</Router>
  );
}

export default App;
