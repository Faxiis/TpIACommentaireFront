import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import ProductList from './pages/products/ProductList';
import ProductDetail from './pages/products/ProductDetail';
import Navbar from "./components/shared/Navbar";
import TestConnection from './pages/login/TestConnection';

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <Router>
                    <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/test-connection" element={<TestConnection />} />
                    </Routes>
                </Router>
        </ThemeProvider>
    );
};

export default App;