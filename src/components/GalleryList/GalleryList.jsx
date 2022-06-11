import GalleryItem from "../GalleryItem/GalleryItem"


const GalleryList = ({galleryList, getAll}) => {
    return (
        <>
         {galleryList.map((galleryItem) => {
            return (
               
            <div>
                 {console.log(galleryItem)}
            <GalleryItem galleryItem={galleryItem} getAll={getAll}/>
            </div>
        )})}
        </>
    )
}

export default GalleryList
