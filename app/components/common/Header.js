'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Popover, Icon, Row, Col} from 'antd';
import * as Action from 'app/redux/actions';
import Helper from 'app/global/helper';

const mapStateToProps = (state, ownProps) => {
	return {
		user: state
		.auth
		.get('user')
	}
}
const mapDispatchToProps = dispatch => ({});

let WWWHeader = (props) => {

	const popoverContent = (
		<div className="dropdown_container">
		<div className="avatar">
		<img
		src={Helper
			.user
			.avatar(props.user.get('avatar'))}
			alt={props
				.user
				.get('name')}/>
				</div>
				{props
					.user
					.get('userType') == 2
					? TrainerNavigation
					: UserNavigation
				}
				</div>
			);
			let user_profile = () => {
				if (props.user && (props.user.get('userType') === 1 || props.user.get('userType') === 2)) {
					return (
						<ul className="nav navbar-nav navbar-right">
						<li><a href="">Become Trainer</a></li>
						<li className="btn-trial"><Link to="/auth/login">{ props.user.get('name') } </Link></li>
						</ul>

					)
				} else {
					return (
						<ul className="nav navbar-nav navbar-right">
						<li><a href="">Become trainer</a></li>
						<li><Link to="/auth/login">SignIn</Link></li>
						<li className="btn-trial"><Link to="/auth/register">Sign Up</Link></li>
						</ul>
					);
				}

			}

			let UserNavigation = (
				<nav className="navbar navbar-default navbar-top">
				<div className="container">
				<div className="navbar-header">
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				</button>
				<Link className="navbar-brand" to="/">Gen<span>NextTraining</span></Link>
				</div>
				<div className="collapse navbar-collapse" id="myNavbar">
				{user_profile()}
				</div>
				</div>
				</nav>
			);

			return (
				<div>
				{props
					.user
					.get('userType') == 2
					? UserNavigation
					: UserNavigation
				}
				</div>
			);
		}

		const ConnectWWWHeader = connect(mapStateToProps, mapDispatchToProps)(WWWHeader)

		export default ConnectWWWHeader;
