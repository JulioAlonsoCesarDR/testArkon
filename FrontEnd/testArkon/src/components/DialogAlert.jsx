import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const DialogAlert = (props) => {
  const { open, nameTask, handleDelete } = props;
  const [isOpen, setIsOpen] = useState(open);
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Eliminar tarea"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Estas seguro de eliminar la tarea {nameTask} 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(!isOpen)}>Cancelar</Button>
          <Button
            onClick={() => {
              handleDelete;
              setIsOpen(!isOpen);
            }}
            autoFocus
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogAlert;
