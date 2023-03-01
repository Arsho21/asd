import './App.scss';
import Mainpage from './pages/Mainpage';
import Header from './components/header/Header';
import { useState } from 'react';


function App(){

  const [show, setShow] = useState(false)
  return (
    <div className="App">
        <Mainpage/>
        <button onClick={() => setShow(true)}>Բացել քարտեզը</button>
        <Header open={show} setShow={setShow}/>
    </div>
  );
}

export default App;
