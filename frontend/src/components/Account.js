import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "../assest/avatars/avatar-cao-yu.png";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router";
function AccountPop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const Navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function logout() {
    localStorage.setItem("loggedIn", false);
    Navigate("/login");
  }
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        <img height={"42px"} src={Avatar} style={{ borderRadius: "20px" }} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            py: 1.5,
            px: 3,
          }}
        >
          <Typography variant="overline">Account</Typography>
          <Typography color="text.secondary" variant="body2">
            Anika Visser
          </Typography>
          <Divider/>
          <Button variant='outlined' sx={{marginTop:'10px'}} onClick={logout}>Sign Out</Button>
        </Box>
        <Divider />
      </Popover>
    </div>
  );
}

export default AccountPop;
