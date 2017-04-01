/**
*
* LeadTable
*
*/

import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'


function LeadTable(props) {
  const options = {
    clearSearch: true,
    noDataText: 'This is custom text for empty data',
    //defaultSortName: 'createdAt',  // default sort column name
    //defaultSortOrder: 'desc'  // default sort order
  }
  return (
    <div>


      <div className="well col-md-6">
        <BootstrapTable
          data={ props.leads }
          options={ options }
          striped={true}
          hover={true}

        >
            <TableHeaderColumn dataField='id' hidden={true} isKey={ true }>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='firstName' dataSort={ true }>First</TableHeaderColumn>
            <TableHeaderColumn dataField='lastName' dataSort={ true }>Last</TableHeaderColumn>
            <TableHeaderColumn dataField='email' dataSort={ true }>Email</TableHeaderColumn>
        </BootstrapTable>
      </div>
    </div>
  );
}

LeadTable.propTypes = {
  leads: React.PropTypes.array,
};

export default LeadTable;
