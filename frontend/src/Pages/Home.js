import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import DataGridDemo from "./DataGrid";
import { apis, baseUrl } from "../Api.js";
import Button from "@mui/material/Button";
import ModalForm from "./Modalform";
import { useNavigate } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
import FetchEmployee from "../APIs/FetchEmployee";
import SideNavBar from "../components/SideNavBar";
import { SvgIcon, Typography } from "@mui/material";
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import SearchBar from '../components/SearchBar'
function Home() {
  const [employeeData, setEmployeeData] = useState([]);
  const Navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}${apis.allemployeeApi}`);
      const data = await response.json();
      setEmployeeData(data.all);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "false") {
      Navigate("/login");
    } else {
      fetchData();
    }
  }, []);

  function handleEmployeeAdded(newEmployee) {
    setEmployeeData([...employeeData, newEmployee]);
  }

  const isLoggedIn = localStorage.getItem("loggedIn");
  return (
    <>
      <SideNavBar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        alignContent={"center"}
        alignItems="center"
        width="100%"
      >
        <Stack direction="row" justifyContent="space-between" spacing={4} sx={{width:'50%'}}>
          <Stack spacing={1}>
            <Typography variant="h4">Employees</Typography>
            {/* <Stack alignItems="center" direction="row" spacing={1}>
              <Button
                color="inherit"
                startIcon={
                  <SvgIcon fontSize="small">
                    <ArrowUpOnSquareIcon />
                  </SvgIcon>
                }
              >
                Import
              </Button>
              <Button
                color="inherit"
                startIcon={
                  <SvgIcon fontSize="small">
                    <ArrowDownOnSquareIcon />
                  </SvgIcon>
                }
              >
                Export
              </Button>
            </Stack> */}
          </Stack>
          <div>
          <ModalForm fetchData={fetchData} />
          </div>
        </Stack>
        {/* <SearchBar/> */}
        <DataGridDemo employeeData={employeeData} fetchData={fetchData} />
      </Box>
    </>
  );
}

export default Home;
