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
			<div className="header">
              <Header/>
            </div>

			{props.children}

			 <div className="footer">
                <Footer/>
            </div>
		</div>
	)
}

const ConnectDefaultLayout = connect(
    mapStateToProps,
    mapDispatchToProps
)(DefaultLayout)

export default ConnectDefaultLayout;
