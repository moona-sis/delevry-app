import React from 'react';
import '../src/App.css'
import 'antd/dist/antd.css'
import Navbar from './components/Navbar'
import ImageSide from './components/ImageSide';
import DelevrySide from './components/DelevrySide'

function App() {
  return (
    <div>
      <Navbar/>
      <div className='main-container'>
       <DelevrySide/>
        <ImageSide/>
        
      </div>
    </div>
  );
}

export default App;
