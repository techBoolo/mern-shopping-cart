import { useEffect, useState } from 'react'
import Product from '../../components/Product/'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/reducers/productSlice.js'
import Progress from '../../components/Progress/'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Products = (props) => {
  const dispatch = useDispatch()

  const { loading, products } = useSelector(state => state.product)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if(loading) {
    return <Progress />
  }
  return (
    <>
      <Typography variant='h6' sx={{ mb: 2}}>Products</Typography> 
      <Grid container spacing={3}>
        {
          products.map(product => (
            <Grid item key={product._id} xs={12} md={6} lg={4}>
              <Product product={product} />
            </Grid>
          ))
        }
      </Grid>
    </>
  );
};

export default Products
