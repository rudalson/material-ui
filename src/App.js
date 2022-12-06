import { Button, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className='App' style={{ bgColor: 'myCustomColor' }}>
      <Typography variant='myVariant'>This is my app</Typography>
      <Typography sx={{ color: 'myCustomColor' }}>
        Hit the like button
      </Typography>
      <Button sx={{ p: 10 }} color='secondary' variant='contained'>
        Hello MUI v5
      </Button>
    </div>
  );
}

export default App;
