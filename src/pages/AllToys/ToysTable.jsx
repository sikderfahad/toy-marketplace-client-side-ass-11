// import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HiOutlineViewGridAdd } from "react-icons/hi";

import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableSortLabel,
  Button,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  tableContainer: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  tableHeadCell: {
    fontWeight: "bold",
    backgroundColor: "#f5f5f5",
  },
});

const ToysTable = ({ headers, data }) => {
  const classes = useStyles();
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (property) => {
    const isAsc = sortBy === property && sortOrder === "asc";
    const newOrder = isAsc ? "desc" : "asc";
    setSortBy(property);
    setSortOrder(newOrder);
  };

  const sortedData = [...data].sort((a, b) => {
    if (a.toyName < b.toyName) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a.toyName > b.toyName) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <TableContainer component={Paper} className={classes}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeadCell}>
              <TableSortLabel
                active={sortBy === "name"}
                direction={sortOrder}
                onClick={() => handleSort("name")}
              >
                Sort by Toy-name
              </TableSortLabel>
            </TableCell>
            {headers.map((header, index) => (
              <TableCell key={index} className={classes.tableHeadCell}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>{rowIndex + 1}.</TableCell>
              <TableCell>{row.sellerName}</TableCell>
              <TableCell>{row.toyName}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>${row.price}</TableCell>
              <TableCell>
                {row.quantity} <sub>Pcs</sub>
              </TableCell>
              <TableCell>
                <Button variant="contained" endIcon={<HiOutlineViewGridAdd />}>
                  Send
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ToysTable;
