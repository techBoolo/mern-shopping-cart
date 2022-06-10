import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
const ShopLink = (props) => {

  return (
    <Link 
      component={RouterLink} 
      to='/' 
      color='inherit' 
      underline='hover'
    >
      Shop
    </Link>
  );
};

export default ShopLink
