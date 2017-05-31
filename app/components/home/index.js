  'use strict';

  import React from 'react';
  import { connect } from 'react-redux';

  import { Link } from 'react-router';
  import { Row, Col } from 'antd';
  import HeaderComp from 'app/components/common/Header';
  import FooterComp from 'app/components/common/Footer';
  import organisationSection from './organisation';
  import technologiesSection from './technologies';
  import courseSection from './courses';
  import memeberSection from './memebers';
  import workshopSection from './workshop';

  const mapStateToProps = ( state, ownProps ) => {
    return {
      user: state.user.get('profile'),
    }
  }
  const mapDispatchToProps = dispatch => ({
  });

  let Header_section = (<section className="hero ng-scope">
  <div className="container">
      <div className="logo-holder">
          <Link to="/auth/login"><img alt="Tech logo angular" src="images/angular.svg"/></Link>
          <Link to="/auth/login"><img alt="React" src="images/react.svg"/></Link>
          <Link to="/auth/login"><img alt="Js" src="images/javascript.svg"/></Link>
          <Link to="/auth/login"><img alt="Tech logo d3" src="images/d3.svg"/></Link>
          <Link to="/auth/login"><img alt="Es6" src="images/jss.svg"/></Link>
      </div>
      <h1 className="mega title">GenNext Training to deliver project based
          learning to give you the head start you need as a developer</h1>
      <p className="subtitle">Level up your programming skills today with
          condensed video lessons on industry leading web frameworks and tools!</p>
      <Link to="/auth/login" id="signup"  className="custom-btn custom-btn-red custom-btn-primary">Unlock the
          Knowledge  <small><i>click here to start</i></small>
      </Link>
  </div>

  </section>);

    let banner_section = (    <div className="banner">
      <div className="bg-color">
        <div className="container">
          <div className="row">
            <div className="banner-text text-center">
            <div className="logo-holder">
                <Link to="/auth/login"><img alt="Tech logo angular" src="img/angular.svg"/></Link>
                <Link to="/auth/login"><img alt="React" src="img/react.svg"/></Link>
                <Link to="/auth/login"><img alt="Js" src="img/javascript.svg"/></Link>
                <Link to="/auth/login"><img alt="Tech logo d3" src="img/d3.svg"/></Link>
                <Link to="/auth/login"><img alt="Es6" src="img/jss.svg"/></Link>
            </div>
            <h1 className="mega title">GenNext Training to deliver project based
                learning to give you the head start you need as a developer</h1>

              <div className="intro-para text-center quote">
                <p className="big-text">Learning Today . . . Leading Tomorrow.</p>
                <p className="small-text">Learn by coding</p>
                <a href="#." className="btn">Start Learning</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);


  let Home = (props) => {

    return (
          <div>
            <div className="header">
              <HeaderComp/>
            </div>
             {banner_section}
             {organisationSection}
             {workshopSection}
             {technologiesSection}
              {courseSection}
            <div className="footer">
                <FooterComp/>
            </div>
          </div>
    )

  }

  const ConnectHome = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)

  export default ConnectHome;
