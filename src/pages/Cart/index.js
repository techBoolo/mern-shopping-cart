import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetCart } from '../../redux/reducers/cartSlice.js'
import CartItem from '../../components/Cart/CartItem.js'
import { info } from '../../utils/helpers.js'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Snackbar from '@mui/material/Snackbar'

const Cart = (props) => {
  const [ openSnackbar, setOpenSnackbar ] = useState(false)
  const { items } = useSelector( state => state.cart)
  const dispatch = useDispatch()
  const { itemsQty, totalQty, totalPrice } = info(items)

  const handleResetCart = () => {
    dispatch(resetCart())
  }
  if(items.length == 0) {
    return (
      <>
        <h5>Nothing in the cart yet</h5>
        <Link component={RouterLink} to='/products' underline='hover'>Products</Link>
      </>
    )
  }
  return (
    <>
      <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center', mb: 2 }}>
        <Link component={RouterLink} to='/products' underline='hover'>Add More</Link>
        <Button variant='outlined' size='small' onClick={handleResetCart}>clear cart</Button>
      </Box>
      <Typography variant='h6' sx={{ mb: '1rem'}}>Shopping cart:</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 3fr 1fr 1fr 1fr', 
            paddingBottom: '1rem', 
            marginBottom: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '1px solid #ccc' }}
          >
            <Typography></Typography>
            <Typography>Name</Typography>
            <Typography>Price</Typography>
            <Typography>Qty</Typography>
            <Typography>Action</Typography>
          </Box>
          { items.map(item => (
              <CartItem key={item._id} item={item} />
            ))
          }
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ padding: '1rem'}}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '1rem', mb: '1rem' }}>
              <Typography>items</Typography>
              <Typography>{itemsQty}</Typography>
              <Typography>total</Typography>
              <Typography>{totalQty}</Typography>
              <Typography>Amount</Typography>
              <Typography>${totalPrice.toFixed(2)}</Typography>
            </Box>
            <Button onClick={() => setOpenSnackbar(true)} variant='contained' size='small'>Proceed to checkout</Button>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message='This app is a demonstration for creating shopping cart only.'
      />
    </>
  );
};

export default Cart
