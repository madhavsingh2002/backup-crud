import  React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { alpha, Stack } from "@mui/system";
import { DialogContent, DialogTitle, IconButton, Tooltip } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Edit from "./Edit";
import { apis, baseUrl } from "../Api.js";
import axios from "axios";
import swal from "sweetalert";
import ConfirmationDialog from "../components/ConfirmationDialog";
import DeleteConfirmationButton from "../components/DeleteConfirmationButton";
import Util from "../Util";
export default function DataGridDemo(props) {
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [deletingItemId, setDeletingItemId] = React.useState(null);
  console.log(`calling the fetch function`);
  const rowsWithIds = props?.employeeData.map((row, index) => ({
    ...row,
    id: `row-${index}`,
  }));
  const openDeleteConfirmation = (_id) => {
    setDeletingItemId(_id);
    setDeleteConfirmationOpen(true);
  };

  const closeDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
  };
  const columns = [
    {
      field: "fullName",
      headerName: "Full Name",
      width: Util.twohud,
    },
    {
      field: "email",
      headerName: "Email",
      width: Util.twohud,
    },
    {
      field: "number",
      headerName: "Number",
      width: 120,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200
    },
    {
      field: "department",
      headerName: "Department",
      width: 100
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (param) => {

        return (
          <Stack direction="row" spacing={1}>
            <Tooltip title="Edit User">
              <IconButton variant="contained" color="warning">
                <Edit currentRow={param.row} fetchData={props.fetchData} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete User">
              
              <DeleteConfirmationButton
                onClick={() => openDeleteConfirmation(param.row._id) }
                fetchData={props.fetchData}
              />
            </Tooltip>
          </Stack>
        );
      },
    },
  ];
  const handleDelete = async (_id) => {
    try {
      const res = await axios.delete(`${baseUrl}${apis.deleteApi}`, {
        data: { _id },
      });
      if (res && res.data) {
        props.fetchData()
        swal({
          text: "Successfully Deleted Employee.",
          icon: "success",
          button: "Ok",
        });
      } else {
        console.log(res.error);
      }
    } catch (err) {
      console.log(err.response);
    } finally {
      closeDeleteConfirmation();
    }
  };
  return (
    <Box className='shadow' mt={3} sx={{ minWidth: 800,backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8), }} >
      {props?.employeeData && props?.employeeData.length > 0 ? (
        <DataGrid
          rows={rowsWithIds}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      ) : (
        <p>No data available.</p>
      )}
      <ConfirmationDialog
        open={deleteConfirmationOpen}
        onClose={closeDeleteConfirmation}
        onConfirm={() => handleDelete(deletingItemId)}
      />
    </Box>
  );
}
