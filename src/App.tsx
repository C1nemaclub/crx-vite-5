import {useEffect, useState, useSyncExternalStore} from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ChromeStore from "./store/chrome-store.ts"
import {MessageEntity} from "./types/types.ts";
import {Button} from "@mui/material";
import {createRoot} from "react-dom/client";
import {createObjectUrl} from "./utils/functions.ts";

function App() {
  const [count, setCount] = useState(0);
  const videoData: MessageEntity = useSyncExternalStore(ChromeStore.subscribe, ChromeStore.getSnapshot)

  // useEffect(()=>{
  //     chrome.runtime.onMessage.addListener((message) => {
  //         console.log('Message received:', message);
  //     });
  // },[])
    console.log('videoData:', videoData)

  return (
    <>
        <div>
            <pre>{JSON.stringify(videoData, undefined, 2)}</pre>
            <a href='https://vitejs.dev' target='_blank'>
                <img src={viteLogo} className='logo' alt='Vite logo'/>
            </a>
            <a href='https://react.dev' target='_blank'>
                <img src={reactLogo} className='logo react' alt='React logo'/>
            </a>
        </div>
        <div className='card'>
                            <Button
                variant="contained"
                onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </Button>
        </div>
        <p className='read-the-docs'>
            Click on the Vite and React logos to learn more
        </p>
    </>
  );
}

export default App;
