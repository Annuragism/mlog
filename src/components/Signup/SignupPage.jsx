import '../AdminLogin/AdminLogin.css';

//Matarial Things
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const theme = createTheme();

export default function SignUp() {

	const [formData, setFormData] = React.useState({})

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	const setToFormData = (e) => {
		let data
		if (e.target.name != "user-image") {
			data = { ...formData, [e.target.name]: e.target.value }
		}
		else {
			data = { ...formData, [e.target.name]: e.target.files[0] }
		}
		setFormData(data)
	}

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: '100vh' }}>
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
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 1,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign up
						</Typography>
						<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }} >
							<label htmlFor="user-image">
								<Typography variant='h5' textAlign="center" >Image</Typography>

								<Avatar
									sx={{
										margin: "auto",
										height: "50px",
										width: "50px"
									}}
									src={formData["user-image"] ? URL.createObjectURL(formData["user-image"]) : ""}
								/>
								<input
									hidden
									type="file"
									accept='image/*'
									name="user-image"
									id="user-image"
									onChange={setToFormData}
								/>
								<Typography textAlign="center">
									<Typography component="span" variant='button' className='pointer' >Add</Typography>
									<Typography component="span" variant='button' className='pointer' color="red" marginLeft="8px" onClick={() => (setFormData["user-image"] = undefined)} >Remove</Typography>
								</Typography>
							</label>

							<TextField
								margin="normal"
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
								autoComplete="username"
								autoFocus
								onChange={setToFormData}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={setToFormData}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={setToFormData}
							/>

							<TextField
								margin="normal"
								required
								fullWidth
								name="confirm-password"
								label="Confirm-Password"
								type="password"
								id="confirm-password"
							// onChange={ e =>  }
							/>

							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							>
								Sign up
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href="#" variant="body2">
										Already have an account?
									</Link>
								</Grid>
							</Grid>
							{/* <Copyright sx={{ mt: 5 }} /> */}
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}