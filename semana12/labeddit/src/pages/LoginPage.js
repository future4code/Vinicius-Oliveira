import React from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import BASE_URL from '../constants/BASE_URL'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

export default function LoginPage(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    if(localStorage.getItem("token") !== null){
      history.push("/")
    }
  }, [])

  const handleGoToSignup = () => {
    history.push("/signup")
  }

  const handleUpdateEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  }

  const handleUpdatePassword = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const body = {
      email: email,
      password: password,
    }

    try {
      const response = await axios.post(`${BASE_URL}/login`, body);

      localStorage.setItem("token", response.data.token);

      history.push("/")
    } catch (error){
      alert("Login falhou :(, cheque os dados e tente novamente");
      console.error(error);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrar!
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleUpdateEmail}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleUpdatePassword}
            value={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" onClick={handleGoToSignup} variant="body2">
                {"Não tem conta? Cadastre-se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
