/*
 * DashboardPage
 *
 * List all the features
 */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectDashboardPage from './selectors';
import {
  updateField,
  addLead,
} from './actions';
import Chart from 'components/Chart';

import Navigation from 'containers/Navigation';
import LeadTable from 'components/LeadTable';


import './style1.css'

export class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    const { props } = this;
    const state = props.DashboardPage;
    return (
      <div>

        <Navigation />
          <p className='mainTitle'>Dashboard</p>
        <div className='dashboard'>

          <div className='column'>


            <div
              id="widget1" className='item'>
              <div className='titles'>
              <p>Clicks</p>
              </div>
              <div className='img'>
              <img className='pointer' src="https://cdn0.iconfinder.com/data/icons/medical-87/128/Medical-18-128.png"/>
              </div>
                <div className='numbers'>
                <p>{state.clicks}</p>

                </div>
            </div>
            <div id="widget2" className='item'>  <div className='titles'>
              <p>Emails Sent</p>
              </div>
              <div className='img'>
              <img className='pointer' src="https://cdn0.iconfinder.com/data/icons/medical-87/128/Medical-24-128.png"/>
              </div>
                <div className='numbers'>
                <p>{state.sends}</p>

                </div></div>
            <div id="widget3" className='item'><div className='titles'>
            <p>Conversions</p>
            </div>
            <div className='img'>
            <img className='pointer' src="https://cdn0.iconfinder.com/data/icons/medical-87/128/Medical-91-128.png"/>
            </div>
              <div className='numbers'>
              <p>{state.conversions}</p>

              </div>

              </div>
            <div id="widget4" className='item'><div className='titles'>
            <p>Earnings</p>
            </div>
            <div className='img'>
            <img className='pointer' src="https://cdn0.iconfinder.com/data/icons/medical-87/128/Medical-30-128.png"/>
            </div>
              <div className='numbers'>
              <p>${state.earnings}</p>

              </div></div>
          </div>

          <div className='column2'>

              <div className='tableArea'>
                <div className='tableContainer'>
                  <div className='react-bs-table-tool-bar'>
                    <form className="form-inline" onSubmit={props.onAddLead}>
                      <label className="sr-only" htmlFor="firstName">First Name</label>
                      <input
                        onChange={props.onInputFieldChanged}
                        value={props.firstName}
                        type="text"
                        className="form-control mb-2 mr-sm-2 mb-sm-0"
                        id="firstName"
                        placeholder="First Name"
                        required
                      />

                      <label className="sr-only" htmlFor="lastName">Last Name</label>
                        <input
                          onChange={props.onInputFieldChanged}
                          value={props.lastName}
                          type="text"
                          className="form-control mb-2 mr-sm-2 mb-sm-0"
                          id="lastName"
                          placeholder="Last Name"
                          required
                        />

                      <label className="sr-only" htmlFor="email">Email</label>
                      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                      <input
                        onChange={props.onInputFieldChanged}
                        value={props.email}
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                      />
                      </div>
                      <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                  </div>
                <div className='theTable'>
                  <LeadTable leads={state.leads} />
                </div>

              </div>
              </div>

            <div className='chartArea'>
                <div className="chartContainer">
                  <div className='chartTitle'>
                    <p>This Month's Statistics</p>
                  </div>

                  <div className='placeChart'>

                    <Chart clicks={state.clicks} sends={state.sends} conversions={state.conversions} />

                  <div className='legend'>
                    <p className='clicks'>Clicks</p>
                    <p className='sent'>Emails Sent</p>
                    <p className='conv'>Conversions</p>

                  </div>

                  </div>


                </div>



            </div>
          </div>

        </div>

      </div>


    );
  }
}

DashboardPage.propTypes = {
  onInputFieldChanged: React.PropTypes.func.isRequired,
  onAddLead: React.PropTypes.func.isRequired,
  DashboardPage: React.PropTypes.shape({
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  DashboardPage: makeSelectDashboardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInputFieldChanged: (e) => dispatch(updateField(e.target.id, e.target.value)),
    onAddLead: (e) => {
      e.preventDefault() // stop form from refreshing the page on submit
      dispatch(addLead())
      e.target.reset(); //wipe form
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
