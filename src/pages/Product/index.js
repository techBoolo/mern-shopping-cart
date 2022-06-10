import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { fetchProduct } from '../../redux/reducers/productSlice.js'
import { addToCart } from '../../redux/reducers/cartSlice.js'

import { useDispatch, useSelector } from 'react-redux'
import Progress from '../../components/Progress/'

import  Grid from '@mui/material/Grid'
import  Typography from '@mui/material/Typography'
import  Paper from '@mui/material/Paper'
import  Box from '@mui/material/Box'
import  Button from '@mui/material/Button'
import  Select from '@mui/material/Select'
import  MenuItem from '@mui/material/MenuItem'

const Product = (props) => {
  const location = useLocation()
  const [ qty, setQty ] = useState( location?.state?.qty || 1)
  const dispatch = useDispatch()
  const { loading,  product } = useSelector(state => state.product)
  const params = useParams()
  const { id } = params
  const navigate = useNavigate()

  const handleAddToCart = () => {
    const item = {...product, qty}
    dispatch(addToCart(item))
    navigate('/cart')
  }

  useEffect(() => {
    dispatch(fetchProduct({ id }))
  }, [dispatch, id])

  if(loading || !product) {
    return <Progress />
  }
  return (
    <>
      <Typography variant='h6' mb={2}>Product</Typography>
      <Grid container spacing={3}>
        <Grid item container xs={12} sm={8} lg={9} spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{ mb: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
              <Box component='img' 
                sx={{ height: '170px', width: '100%', borderRadius: '5px 5px 0px 0px'}}
                src={product.imageUrl}
                alt={product.name}
              />
            </Paper>
          </Grid> 
          <Grid item xs={12} md={6}>
            <Paper
              sx={{ padding: '1rem', mb: '1rem' }}
            >
              <Box>
                <Typography variant='h6'>{product.name}</Typography>
                <Typography variant='h6'>${product.price}</Typography>
                <Typography variant='body2' sx={{ textAlign: 'justify' }}>
                  {product.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>

        </Grid>
        <Grid item xs={12} sm={4} lg={3}>
          <Paper
            sx={{ padding: '1rem'}}
          >
            <Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr'
                }}
              >
                <Typography>Price:</Typography>
                <Typography>${qty * product.price}</Typography>
                <Typography>Status:</Typography>
                <Typography>
                  { product.countInStock > 0 ? 'In Stock' : "out of stock"}
                </Typography>
                <Typography>Qty:</Typography>
                <Select value={qty} 
                  size='small'
                  onChange={(ev) => setQty(ev.target.value)} 
                >
                  {
                    [...Array(product.countInStock).keys()].map(k => (
                      <MenuItem key={k} value={k + 1}>{k + 1}</MenuItem>
                    ))
                  }
                </Select>
              </Box>
              <Button 
                variant='contained' 
                onClick={handleAddToCart}
                fullWidth size='small' 
                sx={{mt: 2}}
              >
                  add To Cart
              </Button>
            </Box>
          </Paper>

        </Grid>
      </Grid>
    </>
  );
};

export default Product
