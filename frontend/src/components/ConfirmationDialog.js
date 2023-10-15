import Button from "@mui/material/Button";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function ConfirmationDialog({ open, onClose, onConfirm }) {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={onConfirm} variant="outlined" color="error">
            Delete
          </Button>
          <Button onClick={onClose} variant="outlined" color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  