import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<string[]>([]);

    const handleCommentSubmit = () => {
        setComments([...comments, comment]);
        setComment('');
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Product Detail - {id}
            </Typography>
            <TextField
                fullWidth
                label="Leave a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
                Submit
            </Button>
            <List>
                {comments.map((comment, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={comment} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ProductDetail;