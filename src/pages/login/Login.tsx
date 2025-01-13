import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Grid, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.username === 'toto@toto' && formData.password === 'toto') {
            onLogin();
            navigate('/');
        } else {
            alert('Identifiants incorrects');
        }
    };

    return (
        <Container
            maxWidth="xs"
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    bgcolor: 'background.paper',
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Connexion
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid item margin={1}>
                        <TextField
                            fullWidth
                            label="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item margin={1}>
                        <TextField
                            fullWidth
                            label="Mot de passe"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item margin={1}>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Se connecter
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="center">
                            Pas encore de compte ?{' '}
                            <Link
                                component={RouterLink}
                                to="/register"
                                color="primary"
                            >
                                Créez-en un ici
                            </Link>
                        </Typography>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default Login;