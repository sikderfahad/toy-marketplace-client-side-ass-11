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
import { Link } from "react-router-dom";

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
                Sort
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
          {sortedData.map((toy, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>{rowIndex + 1}.</TableCell>
              <TableCell>
                <img
                  className="w-[100px] h-[100px] rounded-lg"
                  src={toy.photo}
                  alt=""
                />{" "}
              </TableCell>
              <TableCell>{toy.sellerName}</TableCell>
              <TableCell>{toy.toyName}</TableCell>
              <TableCell>{toy.category}</TableCell>
              <TableCell>${toy.price}</TableCell>
              <TableCell>
                {toy.quantity} <sub>Pcs</sub>
              </TableCell>
              <TableCell>
                <Link to={`/users-toy/${toy._id}`}>
                  <Button
                    variant="contained"
                    endIcon={<HiOutlineViewGridAdd />}
                  >
                    View details
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ToysTable;
