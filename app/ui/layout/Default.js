'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { Button, message, Row, Col } from 'antd';
import Header from 'app/components/user/Header';


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

			<div id="wrapper" className={ wrapper_classes }>

				<Row>
					<Col span={22} offset={1}>
						{props.children}
					</Col>
				</Row>

			</div>

		</div>
	)

}





const ConnectDefaultLayout = connect(
    mapStateToProps,
    mapDispatchToProps
)(DefaultLayout)


export default ConnectDefaultLayout;
