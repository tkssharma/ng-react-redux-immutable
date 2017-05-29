'use strict';

import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import * as Action from 'app/redux/actions';

const mapStateToProps = ( state, ownProps ) => {
	return {
		user: state.auth.get('user'),
	}
}

const mapDispatchToProps = dispatch => ({
});

const SubMenu = Menu.SubMenu;

const commonMenuItems = {
	welcome: 'welcome',
};

class Aside extends React.Component {

}

Aside.propTypes = {
	location: React.PropTypes.object.isRequired
};

const ConnectAside = connect(
	mapStateToProps,
	mapDispatchToProps
)(Aside)

export default ConnectAside;
