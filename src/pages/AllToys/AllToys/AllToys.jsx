import {
  AppBar,
  Box,
  Button,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";

import "animate.css";
import "./AllToys.css";

import ToysTable from "../ToysTable";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Custom/UseTitle/useTitle";
import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Swal from "sweetalert2";
import { LoadingTriangle } from "../../../components/Spinner/Spinner";

const AllToys = () => {
  useTitle("All Toys");

  const getAllToysData = useLoaderData();

  const [allToys, setAllToys] = useState([]);

  const handledFullData = () => {
    setAllToys(getAllToysData);
  };

  useEffect(() => {
    fetch("https://express-workspace.vercel.app/allToysLimit")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const headers = [
    "View",
    "Seller",
    "Toy Name",
    "Sub-Category",
    "Price",
    "Available Quantity",
    "Details",
  ];

  const handledSearchField = (e) => {
    setAllToys(getAllToysData);
    if (e.key === "Enter") {
      const value = e.target.value;
      const searchedToys = allToys.filter((toy) => toy.toyName.includes(value));
      if (searchedToys.length === 0) {
        Swal.fire({
          icon: "question",
          title: "Oops...! ",
          text: "Couldn't find anything 😥",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }

      setAllToys(searchedToys);
    }
  };

  // ------------------------------------
  // Search bar
  // ------------------------------------

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  // ------------------------------------
  // Search bar
  // ------------------------------------

  // Loading Intregation
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change this value as needed
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingTriangle />
      ) : (
        <div className=" my-6">
          <div className="">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <div className="w-10/12 py-6 md:py-1 mx-auto">
                  <Toolbar className="flex md:flex-row flex-col gap-6 justify-between">
                    <Button
                      onClick={handledFullData}
                      variant="contained"
                      color="secondary"
                    >
                      View All Toys
                    </Button>
                    <div className="flex">
                      <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                          flexGrow: 1,
                          display: { xs: "none", sm: "block" },
                        }}
                      >
                        Serch by toy name
                      </Typography>
                      <Search onKeyUp={handledSearchField}>
                        <SearchIconWrapper>
                          <BiSearchAlt2 />
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder="Search…"
                          inputProps={{ "aria-label": "search" }}
                        />
                      </Search>
                    </div>
                  </Toolbar>
                </div>
              </AppBar>
            </Box>
          </div>
          {allToys && (
            <div className="w-10/12 my-10 mx-auto">
              <ToysTable headers={headers} data={allToys}></ToysTable>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllToys;
