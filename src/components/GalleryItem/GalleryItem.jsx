import {useState} from 'react'
import axios from 'axios'


const GalleryItem = ({galleryItem}) => {
    const [liked, setLiked] = useState(0)
    const [isShown, setIsShown] = useState(false);

    
    const addLike = (id) => {
        axios.put(`/gallery/like/${id}`).then(()=>{
            setLiked(liked + 1)
        }).catch((err) => {
            console.log("ERROR in addLike", err)
        })
    }

    const handleLike = (evt) => {
        evt.preventDefault()
        
        addLike(evt.target.id)
        console.log(liked)
    }

    return (
        <div className="photo-container" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            {!isShown ? <div>
                <img src={galleryItem.path} alt="" className='backdrop'/>
            </div> : 
            <div className='photo-container'>
                <p>{galleryItem.description}</p>
            </div>}
            
            
            <button likes={galleryItem.likes} id={galleryItem.id} onClick={handleLike}>Love It!</button>
            {(liked > 0) ? <h3>{liked} people love this</h3> : <h3>No People love this</h3>}  

        </div>
    )
}

export default GalleryItem