import React from 'react';
import PropTypes from 'prop-types';
import { Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Paper } from '@material-ui/core';

function SimpleTable(props) {
  const { headers, dataRows, dataKeys } = props;

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((content, index) => (
              <TableCell key={index}>{content}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataRows.map((data, index) => {
            return (
              <TableRow key={index}>
                {dataKeys.map((keyProp, index) => (
                  <TableCell key={index}>
                    {data[keyProp]}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  headers: PropTypes.array.isRequired, 
  dataRows: PropTypes.array.isRequired, 
  dataKeys: PropTypes.array.isRequired
};

export default SimpleTable;