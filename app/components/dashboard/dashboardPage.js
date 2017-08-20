'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Spin} from 'antd';
import {bindActionCreators} from 'redux';
import {Layout, Affix, Row, Col} from 'antd';
import NavPath from '../../components/NavPath'
import CommonHeader from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import CommonFooter from '../../components/Footer';
import * as Action from 'app/redux/actions';
import Helper from 'app/global/helper';
import './index.less';

const {Content} = Layout;
const mapStateToProps = (state, ownProps) => {
  return {
    user: state
      .auth
      .get('user')
  }
}
const mapDispatchToProps = dispatch => ({
  //fetchProfile: () => dispatch(Action.fetchProfile()),
});

class AdminDashBoardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}
  logout() {}
  render() {
    const {user} = this.props;

    return (
      <Layout className="ant-layout-has-sider">
        <Sidebar/>
        <Layout>
          <CommonHeader profile={user}/>
          <Content style={{
            margin: '0 16px'
          }}>
            <NavPath/>
            <div style={{
              minHeight: 360
            }}>
              {this.props.children}
            </div>
          </Content>
          <CommonFooter/>
        </Layout>
      </Layout>
    );
  }
}

AdminDashBoardComponent.propTypes = {
  user: React.PropTypes.object,
  children: React.PropTypes.node.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashBoardComponent);
