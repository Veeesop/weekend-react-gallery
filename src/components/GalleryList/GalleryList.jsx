import GalleryItem from "../GalleryItem/GalleryItem"




const GalleryList = ({galleryList, getAll, addLike, deleteHotDog}) => {
    return (
        <>
         {galleryList.map((galleryItem) => {
            return (
               
            <div>
                 {console.log(galleryItem)}
            <GalleryItem galleryItem={galleryItem} getAll={getAll} addLike={addLike} deleteHotDog={deleteHotDog}/>
            </div>
        )})}
        </>
    )
}

export default GalleryList
