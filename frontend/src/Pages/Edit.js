import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Util from "../Util";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import { apis, baseUrl } from "../Api.js";
import { useNavigate } from "react-router";
import swal from "sweetalert";

function EditForm(props) {
  console.log(props)
  const navigate = useNavigate()
  const [fullName, setFullname] = useState(props.currentRow.fullName);
  const [number, setNumber] = useState(props.currentRow.number);
  const [email, setEmail] = useState(props.currentRow.email);
  const [address, setAddress] = useState(props.currentRow.address);
  const [department, setDepartment] = useState(props.currentRow.department);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let _id = props.currentRow._id;
  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();
    try {
      const res = await axios.put(`${baseUrl}${apis.editApi}`, {
        _id,
        fullName,
        email,
        number,
        address,
        department,
      });
      if (res && res.data) {
        navigate('/home')
        props.fetchData()
        swal({
          text: "Successfully Edited Employee.",
          icon: "success",
          button: "Ok",
        });
        handleClose();
      } else {
        console.log(res.error);
      }


    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <>
      <span
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        <EditIcon />
      </span>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle style={{ color: "#15B79E" }}>Employee</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit the employee</DialogContentText>

            <TextField
              label="Full Name"
              margin="normal"
              fullWidth
              inputProps={{ minLength: Util.three }}
              required
              name="fullName"
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}
            />
            <TextField
              label="Contact Number"
              margin="normal"
              type="number"
              fullWidth
              required
              inputProps={{
                maxLength: Util.twelve,
                minLength: Util.ten,
                min: Util.zero,
              }}
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <TextField
              label="Email"
              margin="normal"
              fullWidth
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Address"
              margin="normal"
              fullWidth
              required
              type="string"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <FormControl  fullWidth sx={{marginTop:'20px'}}>
              <Select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <MenuItem value={"SDE"}>SDE</MenuItem>
                <MenuItem value={"IT"}>IT</MenuItem>
                <MenuItem value={"HR"}>HR</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleClose} >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default EditForm;
