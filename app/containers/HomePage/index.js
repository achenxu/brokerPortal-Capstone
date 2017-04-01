/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import Button from '../../components/Button/index';
import Navigation from 'containers/Navigation';

import './style2.css'


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navigation />
        <body>
  <form name="login-form" className="login-form" action="" method="post">

		<div className="header">
		<h1>Welcome to KindHealth Broker Portal</h1>
		<span>Please, log in here</span>
		</div>

		<div className="content">
		<input name="username" type="text" className="input username" placeholder="Username" />
		<div className="user-icon"></div>
		<input name="password" type="password" className="input password" placeholder="Password" />
		<div className="pass-icon"></div>
		</div>

		<div className="footer">
		<a href="#" className="button">Login</a>
		</div>

	</form>


</body>



      </div>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
