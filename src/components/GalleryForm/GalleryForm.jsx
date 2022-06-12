import { useState } from "react"


const GalleryForm = ({addNewHotDog}) => {
    const [description, setDescription] = useState()
    const [url, setUrl] = useState()
    
    const saveSubmit = (evt) => {
        evt.preventDefault()
        const newHotDog = {
            path: url,
            description: description
        }
        addNewHotDog(newHotDog)
    }


    return (
        <>
            <h2>Add New HotDog!</h2>
            <form onSubmit={saveSubmit}>
            <input type="text" className="description" placeholder="Description" id="description"
                onChange={evt => setDescription(evt.target.value)}/>
            <input type="text" className="url" placeholder="Image URL" id="url"
                onChange={evt => setUrl(evt.target.value)}/>
            <button type="submit" >Submit</button>
            </form>
            

        </>
    )
}

export default GalleryForm