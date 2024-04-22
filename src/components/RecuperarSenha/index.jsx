import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const iconStyle = {
  position: "absolute",
  right: 0,
  top: 0,
  color: "primary.main",
};

const RecuperarSenha = ({ open, handleClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <IconButton aria-label="close" onClick={handleClose} sx={iconStyle}>
          <CloseIcon />
        </IconButton>
        <Avatar
          sx={{ my: 1, bgcolor: "secondary.main", width: 48, height: 48 }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Login
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Digite seu e-mail para recuperar sua senha.
        </Typography>
        <Typography id="modal-modal-description">
          Você receberá um e-mail com instruções.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            inputProps={{ maxLength: 80 }}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 1 }}>
            Recuperar Senha
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default RecuperarSenha;
