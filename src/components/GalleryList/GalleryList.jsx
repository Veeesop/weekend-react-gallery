import GalleryItem from "../GalleryItem/GalleryItem"


const GalleryList = ({galleryList, getAll, addLike}) => {
    return (
        <>
         {galleryList.map((galleryItem) => {
            return (
               
            <div>
                 {console.log(galleryItem)}
            <GalleryItem galleryItem={galleryItem} getAll={getAll} addLike={addLike}/>
            </div>
        )})}
        </>
    )
}

export default GalleryList
