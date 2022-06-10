import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CopyrightIcon from '@mui/icons-material/Copyright'

const Footer = (props) => {

  return (
    <Stack 
      direction='row' 
      spacing={0.5} 
      alignItems='center' 
      justifyContent='center' 
      color='#9e9e9e' 
      sx={{ height: '3.5rem', bgcolor: '#f4f4f4', mt: 3}}>
      <Typography>shop.et</Typography> 
      <CopyrightIcon fontSize='small'/>
      <Typography>{new Date().getFullYear()}</Typography>
    </Stack>
  );
};

export default Footer
