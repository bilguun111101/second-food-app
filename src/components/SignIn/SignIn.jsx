import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import { signInWithEmailAndPassword } from 'firebase/auth';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import useGetData from "../GetDataFromFS";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Copyright } from './Copyright';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { auth } from '../../firebase';
import _ from "lodash";

// some contextes import ^^^^^^^^^^
import { useTitleContext } from '../../TitleContext';
import { useSignContext } from '../../SignContext';


const styles = {
    signUpBtn: theme => ({
        color: theme.palette.primary.text,
    }),
    backgroundColor: theme => ({
        backgroundColor: theme.palette.primary.main,
    })
}

const SignInSide = () => {

  const userData = useGetData("users");
  const { setTitle } = useTitleContext();
  const { setSignBool, setUserInformation } = useSignContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.get("email")) || 
        !data.get("password") || 
        !data.get("phone")
    ) {
        Notification.requestPermission().then(something => {
            if(something === "granted") {
                const notification = new Notification("Foody", {
                    body: "Та мэдээлэлээ зөв оруулна уу!!!",
                    icon: "https://play-lh.googleusercontent.com/b9oSFAFK4YVDj8yiAh5r7fO4o8KPaEmMbM5be4Z54Y4HpL_Z-EigUCDuOHCpWM13XqY"
                })
                notification.addEventListener("error", event => {
                    alert("error")
                })
            }
        })
        return;
    }

    signInWithEmailAndPassword(auth, data.get("email"), data.get("password")).then((userCredential) => {
        const user = userCredential.user;
        const userInformation = _.filter(userData, { email: data.get("email") });
        setUserInformation(...userInformation);
        setTitle("Мэню");
        setSignBool(true);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSignBool(false);
    })
  };

  return (
    <Grid container component="main" sx={{ height: '100vh', }}>
        <CssBaseline />
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ ...styles.backgroundColor }}>
            <Box
            sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={styles.signUpBtn}>
                Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, }}>
                <TextField
                margin="normal"
                required
                fullWidth 
                sx={{...styles.signUpBtn, ...styles.backgroundColor}}
                name="email"
                label="email"
                id="email"
                autoComplete="current-email"
                />
                <TextField
                margin="normal"
                required
                fullWidth 
                sx={{...styles.signUpBtn, ...styles.backgroundColor}}
                name="phone"
                label="phone"
                type="number"
                id="phone"
                autoComplete="current-phone"
                />
                <TextField
                margin="normal"
                required
                fullWidth 
                sx={{...styles.signUpBtn, ...styles.backgroundColor}}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{  }}
                >
                    Sign In
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="/SignUp" variant="body2" sx={styles.signUpBtn}>
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Box>
            </Box>
        </Grid>
    </Grid>
  );
}

export default SignInSide;