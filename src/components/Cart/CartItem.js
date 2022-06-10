import { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/reducers/cartSlice.js'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const CartItem = ({ item }) => {
  const [ qty, setQty ] = useState(item.qty)
  const dispatch = useDispatch()
  const location = useLocation()

  const handleQtyChange = (ev) => {
    setQty(ev.target.value)
    const i = {...item, qty: ev.target.value }
    dispatch(addToCart(i))
  }
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr 1fr 1fr 1fr', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%', 
        gridGap: '1rem',
        mb: 1
      }}
    >
      <Box component='img' src={item.imageUrl} alt={item.name} sx={{ width: '100%' }} />
      <Link 
        component={RouterLink} 
        to={`/products/${item._id}`} 
        state={{qty}}
      >{item.name}</Link>
      <Typography>${item.price.toFixed(2)}</Typography>
      <Select value={qty} onChange={handleQtyChange} size='small'>
        {
          [...Array(item.countInStock).keys()].map(n => (
            <MenuItem key={n} value={n + 1}>{n + 1}</MenuItem>
          ))
        }
      </Select>
      <IconButton onClick={() => handleRemoveFromCart(item._id)} 
        sx={{ 
          transition: 'all 0.5s ease-out',
          "&:hover": {
            transform: 'scale(1.2)',
            color: 'red', 
          }
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default CartItem
