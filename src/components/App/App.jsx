
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm'

function App() {
  const [galleryList, setGalleryList] = useState([])
  useEffect(()=>{
    getAll()
  },[])

  const deleteHotDog = (id) => {
    axios.delete(`/gallery/${id}`).then(()=>{
      getAll()
    }).catch((err)=>{
      console.log('error in delete', err)
    })
  }

  const addLike = (id) => {
    axios.put(`/gallery/${id}`).then(()=>{
        getAll()
    }).catch((err) => {
        console.log("ERROR in addLike", err)
    })
}

  const addNewHotDog = (newHotDog) => {
    console.log(newHotDog)
    axios.post("/gallery", newHotDog).then(()=>{
      console.log('Post Success')
      const inputs = document.querySelectorAll('#description, #url')
      inputs.forEach(input => {
        input.value = ''
      })

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
        <div className='form'>
          <GalleryForm addNewHotDog={addNewHotDog}/>
        </div>
        <div className='gallery'>
        <GalleryList galleryList={galleryList} getAll={getAll} addLike={addLike} deleteHotDog={deleteHotDog}/>
        </div>
        
      </div>
    );
}

export default App;
