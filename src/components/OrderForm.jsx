import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function OrderForm({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <h2>АДРЕС ДОСТАВКИ</h2>
            <TextField fullWidth name="name" label="Name" variant="standard" />
            <TextField
              fullWidth
              name="lastname"
              label="Last name"
              variant="standard"
            />
            <TextField fullWidth name="city" label="City" variant="standard" />
            <TextField
              fullWidth
              name="addres"
              label="Addres"
              variant="standard"
            />
            <TextField
              fullWidth
              name="appartment"
              label="Appartment"
              variant="standard"
            />
            <TextField
              fullWidth
              name="zipCode"
              label="Zip code"
              variant="standard"
            />

            <Link to="/creditcard">
              <Button type="submit" variant="contained">
                Далее
              </Button>
            </Link>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
