import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import SetDataToFirestore from '../setDataFS';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { SetAuthenticate } from '../Auth';
import useGetData from '../GetDataFromFS';
import { Copyright } from './Copyright';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import _ from "lodash";

const styles = {
    signIpBtn: theme => ({
        color: theme.palette.primary.text,
    }),
    backgroundColor: theme => ({
        backgroundColor: theme.palette.primary.main,
    })
}

const SignUp = () => {

    const navigate = useNavigate();
    const userData = useGetData(`users`);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.get("email")) || 
        !data.get("firstName") || 
        !data.get("lastName") || 
        !data.get("password") || 
        !data.get("phone")
    ) {
        Notification.requestPermission().then(something => {
            if(something === "granted") {
                const notification = new Notification("Foody", {
                    body: "Ямар нэгэн алдаа гарлаа!!!",
                    icon: "https://play-lh.googleusercontent.com/b9oSFAFK4YVDj8yiAh5r7fO4o8KPaEmMbM5be4Z54Y4HpL_Z-EigUCDuOHCpWM13XqY"
                })
                notification.addEventListener("error", event => {
                    alert("error")
                })
            }
        })
        return;
    }
    const alreadyHave = _.includes(userData, data.get("email"));

    if(alreadyHave) {
        Notification.requestPermission().then(something => {
            if(something === "granted") {
                const notification = new Notification("Foody", {
                    body: "Таны оруулсан Email-ээр аль хэдийн бүртгүүлсэн байна!!!",
                    icon: "https://play-lh.googleusercontent.com/b9oSFAFK4YVDj8yiAh5r7fO4o8KPaEmMbM5be4Z54Y4HpL_Z-EigUCDuOHCpWM13XqY"
                })
                notification.addEventListener("error", event => {
                    alert("error")
                })
            }
        })
        return;
    }
    const inputValidDocument = { 
        firstName: data.get("firstName"), 
        lastName: data.get("lastName"), 
        email: data.get("email"), 
        phone: data.get("phone") 
    }

    SetDataToFirestore("users", inputValidDocument)
    SetAuthenticate(data.get("email"), data.get("password"))
    navigate(`/`);
  };

  return (
    <Container component="main" maxWidth="xs" sx={styles.backgroundColor}>
        <CssBaseline />
        <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{...styles.signIpBtn, ...styles.backgroundColor}}>
                Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name" 
                    sx={{...styles.signIpBtn, ...styles.backgroundColor}}
                    autoFocus
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName" 
                    sx={{...styles.signIpBtn, ...styles.backgroundColor}}
                    autoComplete="family-name"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="email" 
                    sx={{...styles.signIpBtn, ...styles.backgroundColor}}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="phone" 
                    sx={{...styles.signIpBtn, ...styles.backgroundColor}}
                    label="Phone number"
                    name="phone" 
                    type="number"
                    autoComplete="phone"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password" 
                    sx={{...styles.signIpBtn, ...styles.backgroundColor}}
                    type="password"
                    id="password"
                    autoComplete="new-password"
                />
                </Grid>
                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained" 
                color="success"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                <Link href="/" variant="body2" sx={styles.signIpBtn}>
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}

export default SignUp;