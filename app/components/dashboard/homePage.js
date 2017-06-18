import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DefaultAction from 'app/redux/actions';
import { Link } from 'react-router';
import { Spin } from 'antd';
import {Action} from '../../redux/actions'

const defaultProps = {};

class AdminHomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>hello from home page</h1>
      </div>
    );
  }
}

AdminHomeComponent.defaultProps = defaultProps;

const mapStateToProps = state => {
  const { key } = state;
  return { key };
}

const mapDispatchToProps = dispatch => ({
	//fetchProfile: () => dispatch(Action.fetchProfile()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminHomeComponent);
