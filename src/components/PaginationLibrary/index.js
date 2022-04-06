import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// ACTIONS IMPORT
import { updatePage, updateRowsPerPage } from "../../containers/Articles/slice";

// MATERIAL-UI IMPORTS
import TablePagination from "@material-ui/core/TablePagination";

// STYLE IMPORTS
import "./pagination-library.scss";

const Pagination = (props) => {
  // REDUX HOOKS
  const dispatch = useDispatch();
  const page = useSelector((store) => store.articles.page);
  const rowsPerPage = useSelector((store) => store.articles.rowsPerPage);
  // FUNCTIONS START
  const handleChangePage = (event, newPage) => {
    // props.setPage(newPage);
    dispatch(updatePage(newPage));
    // console.log('handlechange', newPage * props.rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    // props.setRowsPerPage(parseInt(event.target.value, 10));
    dispatch(updateRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(updatePage(0));
    // props.setPage(0);
    // console.log('rowPerPage', props.rowsPerPage);
  };
  // FUNCTIONS END

  useEffect(() => {
    /*
    After the filters are applied,
    if the number of items are less than the chosen items/page in pagination?
    Page is set to 0
    */
    if (props.data.length < 1) {
      dispatch(updatePage(0));
    }
  }, [props.data]);
  return (
    <div className="pagination-library">
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={props.count}
        labelDisplayedRows={({ from, to }) => `${from} - ${to}`}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Pagination;
