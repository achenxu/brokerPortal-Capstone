/*
 *
 * Navigation
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectNavigation from './selectors';

export class Navigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container flex align-center">
            <div className="navbar-header flex-item-grow">
              <a className="navbar-logo" //href="https://www.kindhealth.co"
              ></a>
            </div>
            <div className="navbar-right">
               <ul className="nav navbar-nav flex align-center">
                <li>{/*<li className="hidden-xs">*/}
                {/* We can make this hamburger menu, but I don't think we'll have much nav */}
                  <a href="#" className="nav-link text-uppercase">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{height:'40px'}}>
        </div>
      </div>
    );
  }
}


Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Navigation: makeSelectNavigation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
