'use strict';

import React from 'react';
import {render} from 'react-dom';
import {
	Router,
	Redirect,
	Route,
	Link,
	browserHistory,
	IndexRoute
} from 'react-router';
import {Provider} from 'react-redux';
import store from 'app/redux/stores';
import {syncHistoryWithStore} from 'react-router-redux'

import * as API from 'app/api'
import * as AuthMiddleware from 'app/utils/middlewares/AuthMiddleware';
import * as APIMiddleware from 'app/utils/middlewares/API';
import * as ScriptMiddleware from 'app/utils/middlewares/Script';
const history = syncHistoryWithStore(browserHistory, store);

import * as Action from 'app/redux/actions';
import jwt from 'jsonwebtoken';

if (localStorage.token) {
	API.setAuthToken(localStorage.token);
	store.dispatch(Action.authUpdateUserData(jwt.decode(localStorage.token)));
}
if (localStorage.geo) {
	// let geo = JSON.parse(localStorage.geo); API.setGeoLocation(geo);
	// 	store.dispatch(Action.wwwSetGeo(geo));
}

//---------------Login pages -----------------------//
import RegisterPage from 'app/ui/auth/Register';
import LoginPage from 'app/ui/auth/Login';
import LogoutPage from 'app/ui/auth/Logout';
import ResetPasswordPage from 'app/ui/auth/ResetPassword';
import ValidateTokenPage from 'app/ui/auth/ValidateToken';
import AuthLayout from 'app/ui/layout/Auth';
import PageNotFound from 'app/ui/common/EmptyComponent';
// ------------------Login pages-------------------//
// ------------------Application Pages-------------//
import AppLayout from 'app/ui/layout/Default';
import PublicLayout from 'app/ui/layout/Public';
import PublicIndexPage from 'app/components/home/index';
//--------------------Dashboard------------------//
import DefaultLayout from 'app/ui/layout/Default';
import AdminDashBoardComponent from 'app/components/dashboard/dashboardPage';
import AdminHomeComponent from 'app/components/dashboard/homePage';
import AdminFormComponent from 'app/components/dashboard/formPage';

render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="auth" component={AuthLayout}>
				<Route
					path="register"
					component={RegisterPage}
					onEnter={AuthMiddleware.notLoggedIn}/>
				<Route path="login" component={LoginPage} onEnter={AuthMiddleware.notLoggedIn}/>
				<Route path="logout" component={LogoutPage}/>
				<Route path="validate-token" component={ValidateTokenPage}/>
				<Route
					path="reset-password"
					component={ResetPasswordPage}
					onEnter={AuthMiddleware.notLoggedIn}/>
			</Route>

			<Route path="/">
				<IndexRoute to="home"/>
				<Route component={AdminDashBoardComponent}>
					<Route path="dashboard" component={AdminHomeComponent} onEnter={! AuthMiddleware.notLoggedIn} />
					<Route path="form" component={AdminFormComponent} onEnter={! AuthMiddleware.notLoggedIn}/>
				</Route>
				<Route path="login" component={LoginPage} onEnter={AuthMiddleware.notLoggedIn}/>
			</Route>

			<Route path="/home" component={PublicLayout}>
			 	<IndexRoute component={PublicIndexPage}/>
			</Route>
		</Router>
	</Provider>
), document.getElementById('root'));
