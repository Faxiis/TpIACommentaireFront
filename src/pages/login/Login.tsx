import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Container,
    Grid2,
    Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.email === 'toto@toto' && formData.password === 'toto') {
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
                        <Grid2 item margin={1}>
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Grid2>
                        <Grid2 item margin={1}>
                            <TextField
                                fullWidth
                                label="Mot de passe"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Grid2>
                        <Grid2 item margin={1}>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Se connecter
                            </Button>
                        </Grid2>
                        <Grid2 item>
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
                        </Grid2>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
