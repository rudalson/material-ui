import { Button, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Typography variant='h4'>This is my app</Typography>
      <Typography>Hit the like button</Typography>
      <Button color='primary' variant='contained'>
        Hello MUI v5
      </Button>
    </div>
  );
}

export default App;
