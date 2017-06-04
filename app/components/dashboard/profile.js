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
<div></div>
	)
}
const connectDashboardPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(dashboardPage)

export default connectDashboardPage;
