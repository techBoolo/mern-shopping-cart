import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const Cart = (props) => {
  const { items } = useSelector(state => state.cart)

  return (
    <Link 
      component={RouterLink}
      to='/cart'
      underline='none'
      sx={{ 
        display: 'flex', 
        mr: 2, 
        color: '#fff',
        alignItems: 'center',
        padding: '0.5rem',
        borderRadius: '5px',
        bgcolor: '#ccc',
        "&:hover": {
          bgcolor: '#dd219c',
          color: '#f4f4f4'
        }
      }}
    >
      <AddShoppingCartIcon fontSize='small' />
      <Typography mx='5px'>Cart</Typography>
      <Typography 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '30px',
          height: '30px',
          textAlign: 'center',
          borderRadius: '50%',
          bgcolor: '#f4f4f4',
          color: '#000',
          fontSize: '1rem'
        }}>{items.length}</Typography>
    </Link>
  );
};

export default Cart
