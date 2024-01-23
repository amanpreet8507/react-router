import './App.css';
import ImageList from './components/ImageList/ImageList';
import Image from './components/Image/Image';
import jsonData from './data/images.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [arrImages, setArrImages] = useState(jsonData)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ImageList arrImages={arrImages}
        />}/>
        <Route path='image/:imageId' element={<Image arrImages={arrImages}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
