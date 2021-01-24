import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

import DeleteButton from '../DeleteButton'
import { projectDelete } from '../../redux/actions/projects'
import { useProjectsSelect } from '../../selectors/projects';
import { getFormattedDate } from '../../utils/formatters';
import useStyles from './styles';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  {
    id: 'title',
    label: 'Title',
    minWidth: 170,
    format: (value, {item}) => <Link to={`/projects/${item.id}`}>{value}</Link>,
  },
  {
    id: 'beginDate',
    label: 'Started',
    minWidth: 170,
    align: 'right',
    format: (value) => getFormattedDate(value),
  },
  {
    id: 'expirationDate',
    label: 'Finished',
    minWidth: 170,
    align: 'right',
    format: (value) => getFormattedDate(value),
  },
  {
    id: 'deleted',
    label: 'Deleted',
    minWidth: 170,
    align: 'right',
    format: (value, {item, dispatch}) => (<DeleteButton onClick={() => dispatch(projectDelete(item.id))} />),
  },
];

const ProjectsList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = useProjectsSelect();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value, {item: row, dispatch}) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default ProjectsList;
