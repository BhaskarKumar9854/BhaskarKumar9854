import React, { useEffect,useState } from 'react'
import Context from './Context'

const State = (props) => {
    const api_key = "46820694-fdef650e015c8038e2c9f747f";

    const [imageData, setImageData] = useState([])
    const  [query, setQuery] = useState('london')
    useEffect (() => {
        const fetchData = async () => {
        const api = await fetch (`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`)
        const data =  await api.json()
        setImageData(data.hits)

            
        };
         fetchData()

    }, [query]);

    const fetchImageByCategory = async (cat) => {
        const api = await fetch (`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100
`)

            const data = await api.json();
            setImageData(data.hits)


    }
  return (
    <div>
      <Context.Provider value = {{ imageData, fetchImageByCategory,setQuery}}>
        {props.children}

      </Context.Provider>
    </div>
  )
}

export default State
