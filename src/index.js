import React from 'react';
import ReactDOM from 'react-dom';
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
import HomeThree from './HomeThree';
import HomeFour from './HomeFour';
import HomeFive from './HomeFive';
import HomeSix from './HomeSix';
import HomeSeven from './HomeSeven';
import HomeEight from './HomeEight';
import HomeNine from './HomeNine';
import Login from './Login';
import SignUp from './SignUp';
import PasswordForget from './PasswordForget';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			  <Route exact path={`/`} component={HomeOne}/>
			  <Route path={`/home-one`} component={HomeOne}/>
			  <Route path={`/home-two`} component={HomeTwo}/>
			  <Route path={`/home-three`} component={HomeThree}/>
			  <Route path={`/home-four`} component={HomeFour}/>
			  <Route path={`/home-five`} component={HomeFive}/>
			  <Route path={`/home-six`} component={HomeSix}/>
			  <Route path={`/home-seven`} component={HomeSeven}/>
			  <Route path={`/home-eight`} component={HomeEight}/>
			  <Route path={`/home-nine`} component={HomeNine}/>
			  <Route path={`/login`} component={Login}/>
			  <Route path={`/password-forget`} component={PasswordForget}/>
			  <Route path={`/sign-up`} component={SignUp}/>
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
