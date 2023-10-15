import { IconButton, Tooltip } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function DeleteConfirmationButton({ onClick }) {
    return (
      <Tooltip title="Delete User">
        <IconButton variant="contained" color="error" onClick={onClick}>
          <DeleteForeverIcon />
        </IconButton>
      </Tooltip>
    );
  }