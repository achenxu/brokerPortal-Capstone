/**
*
* Chart
*
*/

import React from 'react';
import {Doughnut} from 'react-chartjs'


function Chart(props) {
  const dataObj = [{
  		value: props.clicks,
  		color:"#BAE0BD",
  		highlight: "#BAE0BD",
  		label: "Clicks"
  	},
  	{
  		value: props.sends,
  		color: "#FFC49C",
  		highlight: "#FFC49C",
  		label: "Emails Sent"
  	},
  	{
  		value: props.conversions,
  		color: "#8BB7F0",
  		highlight: "#8BB7F0",
  		label: "Conversions"
  	}
  ];
  return (
    <div>
      <Doughnut
        data={dataObj}
        options={{
          animation:{
              animateScale:true
          }
        }}

    width='350' height='350'  />
    </div>
  );
}

Chart.propTypes = {

};

export default Chart;
