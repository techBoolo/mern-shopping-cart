import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
const Progress = (props) => {

  return (
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />      
    </Box>
  );
};

export default Progress
