// import React from 'react'
import { AppBar, Typography, Tabs, Tab, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
// import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
// import { useState } from "react";

const Header = () => {
  // const [value, setValue] = useState();
  return (
    <>
      <AppBar sx={{ backgroundColor: "gray" }} position="sticky">
        <Toolbar>
          <Typography variant="h6">
            {/* <LibraryBooksOutlinedIcon /> */}
          </Typography>
          <Tabs
            sx={{ m: "auto" }}
            indicatorColor="primary"
            textColor="inherit"
            // value={value}
            // onChange={(val) => setValue(val)}
            // variant="scrollable"
          >
            <Tab LinkComponent={NavLink} to={"/add"} label={"ADD PRODUCT"} />
            <Tab LinkComponent={NavLink} to={"/books"} label={"BOOKS"} />
            <Tab LinkComponent={NavLink} to={"/about"} label={"ABOUT US"} />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
