import './App.css';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function App() {
  const MyCustomButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(2),
  }));

  return (
    <div className='App' style={{ bgColor: 'myCustomColor' }}>
      <Typography variant='myVariant'>This is my app</Typography>
      <Typography sx={{ color: 'myCustomColor' }}>
        Hit the like button
      </Typography>
      <MyCustomButton variant='contained'>Hello MUI v5</MyCustomButton>
    </div>
  );
}

export default App;
