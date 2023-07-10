import './ImageList.css';
import ImageShow from "./ImageShow";

function ImageList({ image }){

    const renderedImages = image.map((image) => {
        return <ImageShow image={image} key={image.id} />
    })

    return <div className='image-list'>{renderedImages}</div>
}

export default ImageList;