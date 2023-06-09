import { makeStyles } from "@material-ui/core/styles";
import { RxUpdate } from "react-icons/rx";
import { MdDelete } from "react-icons/md";

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
import { FaStar } from "react-icons/fa";
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

const UserToyTable = ({ headers, data, deleteToy }) => {
  const classes = useStyles();
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (property) => {
    const isAsc = sortBy === property && sortOrder === "asc";
    const newOrder = isAsc ? "desc" : "asc";
    setSortBy(property);
    setSortOrder(newOrder);
  };

  const sortedData = data.sort((a, b) => {
    if (a.price < b.price) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a.price > b.price) {
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
                Sort by Price
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
              <TableCell>{rowIndex + 1}•</TableCell>
              <TableCell>
                <img className="rounded-lg" src={toy.photo} alt="" />{" "}
              </TableCell>
              <TableCell>{toy.toyName}</TableCell>
              <TableCell>{toy.category}</TableCell>
              <TableCell>${toy.price}</TableCell>
              <TableCell>
                {toy.quantity} <sub>Pcs</sub>
              </TableCell>
              <TableCell>
                <span className="flex items-center justify-center gap-1">
                  {toy.rating} <FaStar className="text-yellow-400" />
                </span>
              </TableCell>
              <TableCell>{toy.details}</TableCell>
              <TableCell>{toy.sellerName}</TableCell>
              <TableCell>{toy.email}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-6">
                  <Link to={`/update-toy/${toy._id}`}>
                    <Button variant="contained" endIcon={<RxUpdate />}>
                      Update
                    </Button>
                  </Link>
                  <Button
                    onClick={() => deleteToy(toy._id)}
                    variant="outlined"
                    startIcon={<MdDelete />}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserToyTable;
