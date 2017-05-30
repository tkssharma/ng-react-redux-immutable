'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { Button, message, Row, Col } from 'antd';
import Header from 'app/components/user/Header';
import Footer from 'app/components/common/Footer';

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

let DefaultLayout = (props) => {

	return (
		<div>
			<Header />

			<div id="wrapper">
				<Row>
					<Col span={22} offset={1}>
						{props.children}
					</Col>
				</Row>
			</div>
			<Footer/>
		</div>
	)
}

const ConnectDefaultLayout = connect(
    mapStateToProps,
    mapDispatchToProps
)(DefaultLayout)

export default ConnectDefaultLayout;
