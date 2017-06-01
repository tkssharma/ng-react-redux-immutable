'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as DefaultAction from 'app/redux/actions';
import { Link } from 'react-router';
import { Spin } from 'antd';

const mapStateToProps = ( state, ownProps ) => {
	return {
	}
}

const mapDispatchToProps = dispatch => ({
});

let dashboardPage = ( props ) => {
	return (
<div class="banner"><div class="bg-color"><div class="container"><div class="row"><div class="banner-text text-center"><div class="logo-holder"><a href="/auth/login"><img alt="Tech logo angular" src="img/angular.svg"></a><a href="/auth/login"><img alt="React" src="img/react.svg"></a><a href="/auth/login"><img alt="Js" src="img/javascript.svg"></a><a href="/auth/login"><img alt="Tech logo d3" src="img/d3.svg"></a><a href="/auth/login"><img alt="Es6" src="img/jss.svg"></a></div><h1 class="mega title">GenNext Training to deliver project based learning to give you the head start you need as a developer</h1><div class="intro-para text-center quote"><p class="big-text">Learning Today . . . Leading Tomorrow.</p><p class="small-text">Learn by coding</p><a href="#." class="btn">Start Learning</a></div></div></div></div></div></div>
	)
}
const connectDashboardPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(dashboardPage)

export default connectDashboardPage;
