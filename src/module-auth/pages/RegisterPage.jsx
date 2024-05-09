import { useState } from "react";
import { useNavigate,Link as RouterLink } from "react-router-dom";
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Grid,
  Alert,
  Typography,
  Link,
} from "@mui/material";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { store } from "../../store/store";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { AuthLayout } from "../layout/AuthLayout";
import { Formik } from "formik";
import { object, string } from "yup";
import { startRegisterWithEmailPassword } from "../../store/auth/authThunks";

const validationSchema = object({
  email_usuario: string("Ingese su correo electronico")
    .email()
    .required("Este campo es obligatorio"),
  password: string("Ingrese su contraseña").required("Este campo es requerido"),
  username:string("Ingrese su username").required("Este campo es obligatorio")
});



export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (values) => {
    console.log(values);
    dispatch(
      startRegisterWithEmailPassword(values, () => {
        navigate("/bancos/inicio");
      })
    );
  };

  return (
    <AuthLayout title="Crear cuenta">
      <Formik
        initialValues={{
          email_usuario: "",
          password: "",
          username: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Formulario", values);
          onSubmit(values);
        }}
      >
        {({ handleChange, values, errors, touched, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                name="email_usuario"
                label="Email address"
                id="email_usuario"
                type="email"
                placeholder="Correo@gmail.com"
                onChange={handleChange}
                value={values.email_usuario}
                error={touched.email_usuario && Boolean(errors.email_usuario)}
                helperText={touched.email_usuario && errors.email_usuario}
              />
              <TextField
                name="username"
                label="Username"
                id="username"
                type="text"
                placeholder="username"
                onChange={handleChange}
                value={values.username}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
              <TextField
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                onChange={handleChange}
                value={values.password}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <div>
                {store.getState().auth.status === "error" ? (
                  <Alert sx={{ mt: 3, mb: 3 }} severity="error">
                    {store.getState().auth.errorMessage}
                  </Alert>
                ) : (
                  ""
                )}
              </div>
            </Grid>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              //disabled={isAutehnticating}
            >
              Crear Cuenta
            </LoadingButton>
          </form>
        )}
      </Formik>

      <Grid  sx={{ mt: 1}}  container direction="row" justifyContent="end">
        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
        <Link component={RouterLink} color="inherit" to="/auth/login">
          Ingresar
        </Link>
      </Grid>
    </AuthLayout>
  );
};
