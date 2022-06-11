
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] = useState([])
  useEffect(()=>{
    getAll()
  },[])

  const addLike = (id) => {
    axios.put(`/gallery/${id}`).then(()=>{
        getAll()
    }).catch((err) => {
        console.log("ERROR in addLike", err)
    })
}

  const getAll = () => {
    axios.get('/gallery').then((response) => {
      setGalleryList(response.data)
      console.log(response.data)
    }).catch((err)=>{
      console.log('error in getAll', err)
    })
  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div className='gallery'>
        <GalleryList galleryList={galleryList} getAll={getAll} addLike={addLike}/>
        </div>
        
      </div>
    );
}

export default App;
