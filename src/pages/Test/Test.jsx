import {
  AppBar,
  Box,
  Button,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";
import { BiSearchAlt2 } from "react-icons/bi";
import "./Test.css";

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

const Test = () => {
  return (
    <div className="">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <div className="w-10/12 py-6 md:py-1 mx-auto">
            <Toolbar className="flex md:flex-row flex-col gap-6 justify-between">
              <Button
                // onClick={handledFullData}
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
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  Serch by toy name
                </Typography>
                <Search>
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
  );
};

export default Test;
