import { Typography, AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'

const Navbar = () => {
  return (
    <div>
        <AppBar position="fixed">
            <Toolbar>
            <Typography variant="h6" flexGrow={1}>
                Cake shop
            </Typography>
            <Button variant='text' color="inherit" startIcon={<LogoutIcon />}>
                Login
            </Button>
            <Button variant='text' color="inherit" startIcon={<LogoutIcon />}>
                Logout
            </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar