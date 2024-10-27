import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  //   const data: MessageEntity = useSyncExternalStore(
  //     ChromeStore.subscribe,
  //     ChromeStore.getSnapshot
  //   );

  // useEffect(()=>{
  //     chrome.runtime.onMessage.addListener((message) => {
  //         console.log('Message received:', message);
  //     });
  // },[])

  return (
    <>
      <div>
        {/* {data && (
          <Grow in>
            <Typography variant='h4'>{data.message}</Typography>
          </Grow>
        )} */}
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img
            src={reactLogo as string}
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <button>
        <h1>Alien!! WHY!!</h1>
      </button>
      <div className='card'>
        <Button
          color='primary'
          variant='contained'
          onClick={() => setCount((count) => count + 1)}>
          count is {count} 👽 🎃
        </Button>
      </div>
      <Typography variant='h4'>
        Click on the Vite and React logos to learn more
      </Typography>
    </>
  );
}

export default App;
