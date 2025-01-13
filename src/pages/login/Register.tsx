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

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Les mots de passe ne correspondent pas !');
            return;
        }
        // Appeler l'API pour enregistrer l'utilisateur
        console.log('Form Data Submitted: ', formData);
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
                    Inscription
                </Typography>
                <form onSubmit={handleSubmit}>
                        <Grid2 item margin={1}>
                            <TextField
                                fullWidth
                                label="Nom d'utilisateur"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </Grid2>
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
                            <TextField
                                fullWidth
                                label="Confirmer le mot de passe"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
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
                                S'inscrire
                            </Button>
                        </Grid2>
                        <Grid2 item>
                            <Typography variant="body2" align="center">
                                Déjà un compte ?{' '}
                                <Link
                                    component={RouterLink}
                                    to="/login"
                                    color="primary"
                                >
                                    Connectez-vous ici
                                </Link>
                            </Typography>
                        </Grid2>
                </form>
            </Box>
        </Container>
    );
};

export default Register;