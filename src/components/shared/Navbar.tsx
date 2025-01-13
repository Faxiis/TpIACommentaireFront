import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
    isLoggedIn: boolean;
    onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Site Title
                </Typography>
                {isLoggedIn && (
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                )}
            </Toolbar>
        </AppBar>

    );
};

export default Navbar;