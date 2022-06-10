import { Link as RouterLink } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Product = ({ product }) => {

  return (
    <Paper 
      sx={{
        padding: '1.5rem',
        bgcolor: '#f4f4f4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}

    >
      <Box component='img' 
        sx={{ height: '170px', borderRadius: '5px 5px 0px 0px', mb: 1 }}
        src={product.imageUrl} 
        alt={product.name}
      >
      </Box>
      <Box>
        <Typography variant='h6' sx={{ mb: '8px'}}>{product.name}</Typography> 
        <Typography variant='body2'  sx={{ mb: '8px', textAlign: 'justify' }}>
          { product.description.slice(0, 200)}...
        </Typography> 
      </Box> 
      <Typography variant='h6' sx={{ mb: '8px'}}>${product.price}</Typography>
      <Link component={RouterLink} to={`/products/${product._id}`}
        underline='none'
        sx={{
          width: '100%',
          bgcolor: '#fff',
          color: '#000',
          padding: '0.4rem',
          border: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '1.1rem',
          "&:hover": {
            bgcolor: '#171717',
            color: '#fff'
          }
        }}
      >
        View
      </Link>
    </Paper>
  );
};

export default Product
