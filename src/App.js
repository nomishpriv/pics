import { useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchImages from './api'
import ImageList from './components/ImageList'
function App(){

    const [image, setImage] = useState([]);

    const handleSubmit = async (term) => {
        const result = await SearchImages(term);
        setImage(result)
    }


    return (
        <div>
        <SearchBar onSubmit={handleSubmit}/ >
        <ImageList image={image} />
        </div>
        )
};

export default App;