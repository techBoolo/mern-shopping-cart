import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Cart from '../Cart/'
import ShopLink from './ShopLink.js'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'

import Drawer from '@mui/material/Drawer'

import MenuIcon from '@mui/icons-material/Menu'
const Navbar = (props) => {
  const [ openDrawer, setOpenDrawer ] = useState(false)

  const menuList =  () => (
      <Stack
        role='presentation'
        onClick={() => setOpenDrawer(false)}
        sx={{ width: 250, height: 1}}
        spacing={3}
        justifyContent='center'
        alignItems='center'
      >
        <Cart />
        <ShopLink />
      </Stack>
    )
  
  return (
    <AppBar position='static' sx={{ mb: { xs: 1, sm: 2 } }}>
      <Toolbar sx={{  height: '60px' }}>
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            width: '100%' 
          }}
        >
          <Link 
            component={RouterLink} 
            to='/' 
            color='inherit' 
            underline='hover' 
            sx={{ fontSize: { xs: '1rem', sm: '1.5rem' } }}
          >
            MERN shopping cart
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'flex'}, alignItems: 'center' }}>
            <Cart />
            <ShopLink />
          </Box>
          <IconButton color='inherit' 
              onClick={() => setOpenDrawer(true)}
              sx={{
                display: { xs: 'flex', sm: 'none'} 
              }}
          >
            <MenuIcon color='inherit' size='large' />
          </IconButton>
        </Box>
        <Drawer
          anchor='right'
          open={openDrawer}
          onClose={() => setOpenDrawer(!openDrawer)}
        >
          { menuList() }
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar
