import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { MuiTelInput } from "mui-tel-input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "@/components/Copyright";
import { useState } from "react";

const Cadastro = () => {
  const [celular, setCelular] = useState("+55");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "secondary.main", width: 48, height: 48 }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastro
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Nome"
                    autoFocus
                    inputProps={{ maxLength: 40 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Sobrenome"
                    name="lastName"
                    autoComplete="family-name"
                    inputProps={{ maxLength: 80 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField
                      required
                      fullWidth
                      id="birthdate"
                      name="birthdate"
                      autoComplete="bday"
                      label="Data de Nascimento"
                      format="DD/MM/YYYY"
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MuiTelInput
                    required
                    fullWidth
                    id="cellphone"
                    label="Celular"
                    name="cellphone"
                    autoComplete="tel-national"
                    value={celular}
                    onChange={(valor) => setCelular(valor)}
                    inputProps={{ maxLength: 20 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    inputProps={{ maxLength: 80 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    inputProps={{ maxLength: 80 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Confirmação de Senha"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    inputProps={{ maxLength: 80 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label={
                      <Typography>
                        Concordo com os{" "}
                        <span>
                          <Link
                            component={RouterLink}
                            to="/termos-de-uso"
                            target="_blank"
                          >
                            termos de uso
                          </Link>
                        </span>{" "}
                        e de{" "}
                        <span>
                          <Link
                            component={RouterLink}
                            to="/politica-de-privacidade"
                            target="_blank"
                          >
                            política de privacidade
                          </Link>
                        </span>
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    component={RouterLink}
                    to="/fazer-login"
                    variant="body2"
                  >
                    Já possui uma conta? Entrar
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        <Copyright
          sx={{
            pb: 2,
            px: 2,
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default Cadastro;
