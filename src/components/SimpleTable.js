import React from 'react';
import PropTypes from 'prop-types';
import { Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Paper, Button } from '@material-ui/core';

function SimpleTable(props) {
  const { headers, dataRows, dataKeys, onDelete, onEdit } = props;
  const handleDelete = (data, index) => {
    return () => {
      onDelete(data, index);
    }
  }
  const handleEdit = (data, index) => {
    return () => {
      onEdit(data, index);
    }
  }

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((content, index) => (
              <TableCell key={index}>{content}</TableCell>
            ))}
            { <TableCell key={headers.length}></TableCell> }
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
                {
                  <TableCell key={dataKeys.length}>
                    <Button variant="contained" color="default" onClick={ handleEdit(data, index) }>
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={ handleDelete(data, index) }>
                      Delete
                    </Button>
                  </TableCell> 
                }
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