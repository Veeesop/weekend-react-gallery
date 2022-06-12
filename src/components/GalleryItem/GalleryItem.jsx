import {useState} from 'react'

const GalleryItem = ({galleryItem, addLike, deleteHotDog}) => {
    const [liked, setLiked] = useState(galleryItem.likes)
    const [isShown, setIsShown] = useState(false);

    const handleLike = (evt) => {
        evt.preventDefault()
        addLike(evt.target.id)
        console.log(liked)
        setLiked(liked + 1)
        galleryItem.likes = liked;
    }

    const handleDelete = (evt) => {
        evt.preventDefault()
        deleteHotDog(evt.target.id)
    }

    return (
        <div className="photo-container" onClick={() => setIsShown(!isShown)}>
            {!isShown ? <div>
                <img src={galleryItem.path} alt="" className='backdrop'/>
            </div> : 
            <div className='photo-container'>
                <p>{galleryItem.description}</p>
            </div>}
            
            <button id={galleryItem.id} onClick={handleDelete}>Delete</button>
            <button likes={galleryItem.likes} id={galleryItem.id} onClick={handleLike}>Love It!</button>
            {(liked > 0) ? <h3>{liked} people love this</h3> : <h3>No People love this</h3>}  

        </div>
    )
}

export default GalleryItem