import React from 'react';
import { Link } from 'react-router-dom';
import {Box, Typography, List, ListItem, ListItemText, Container} from '@mui/material';

const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    // Add more products as needed
];

const ProductList: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Products
            </Typography>
            <List>
                {products.map((product) => (
                    <ListItem key={product.id} button component={Link} to={`/product/${product.id}`}>
                        <ListItemText primary={product.name} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default ProductList;