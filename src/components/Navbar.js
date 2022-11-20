import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ShoppingCart } from '@material-ui/icons';
import { Badge, IconButton } from '@mui/material';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="estatic">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Licorera CM
                    </Typography>
                    <Button color="inherit">Ingresa</Button>
                    <IconButton aria-label='show cart items' color='inherit'>
                        <Badge badgeContent={0}>
                        <ShoppingCart />
                        </Badge>
                        
                    </IconButton>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
