import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Layout, Affix, Row, Col} from 'antd';

import NavPath from '../../components/NavPath'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import {fetchProfile, logout} from '../../actions/auth';

import './index.less';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state
      .auth
      .get('user'),
    user: state
      .menu
      .get('navmenu')
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userLogout: () => dispatch(Action.userLogout())
  }
}
const {Content} = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this
      .logoutUser
      .bind(this);
  }

  componentWillMount() {}
  logoutUser() {
    props.userLogout();
  }
  render() {
    const {user} = this.props;

    return (
      <Layout className="ant-layout-has-sider">
        <Sidebar/>
        <Layout>
          <Header profile={user} handleLogOut={this.logoutUser}/>
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
          <Footer/>
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
