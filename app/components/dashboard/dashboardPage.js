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
	return (<div className="banner2">
      <div className="bg-color">
        <div className="container">
          <div className="row">
            <div className="banner-text text-center">
            <div className="logo-holder">
                <Link to="/auth/login"><img alt="Tech logo angular" src="../img/angular.svg"/></Link>
                <Link to="/auth/login"><img alt="React" src="../img/react.svg"/></Link>
                <Link to="/auth/login"><img alt="Js" src="../img/javascript.svg"/></Link>
                <Link to="/auth/login"><img alt="Tech logo d3" src="../img/d3.svg"/></Link>
                <Link to="/auth/login"><img alt="Es6" src="../img/jss.svg"/></Link>
            </div>
            <h1 className="mega title">GenNext Training to deliver project based
                learning to give you the head start you need as a developer</h1>

              <div className="intro-para text-center quote">
                <Link to="/auth/dashboard/profile" className="btn-bg btn btn-spacing">Start Learning</Link>
																<a href="#." className="btn-bg btn">Become Trainer</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}
const connectDashboardPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(dashboardPage)

export default connectDashboardPage;
