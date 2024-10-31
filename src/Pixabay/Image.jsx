import React, { useContext } from 'react'
import Context from './Context';
import './Color.css';


const Image = () => {
    const { imageData } = useContext(Context);
      return (
    <div className='container'>
        <div className='pink'>
            {imageData.map((image) => (
                <div key={image.id}>
                    <div className='pinkl'> 
                        <img src = {image.largeImageURL} />
                    </div>
                     </div>
                
            ))}

        </div>
      
    </div>
  )
}

export default Image
