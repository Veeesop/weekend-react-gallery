import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] = useState([])
  useEffect(()=>{
    getAll()
  },[])

  const getAll = () => {
    axios.get('/gallery').then((response) => {
      setGalleryList(response.data)
      console.log(response.data)
    })
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div className='gallery'>
        <GalleryList galleryList={galleryList} getAll={getAll}/>
        </div>
        
      </div>
    );
}

export default App;
