import React, { useContext } from 'react'
import Context from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {
  const {fetchImageByCategory,setQuery} = useContext(Context)
  return (
  <>
  <div  className='button'  style={{padding:'10px'}}>
   <button onClick={()=> fetchImageByCategory('nature')} type='button' className = "btn btn-outline-secondary" >Nature </button>
   <button onClick={()=> fetchImageByCategory('science')} type='button' className = "btn btn-outline-success" >Science </button>

   <button onClick={()=> fetchImageByCategory('computer')} type='button' className = "btn btn-outline-danger">Computer </button>

   <button onClick={()=> fetchImageByCategory('building')} type='button' className = "btn btn-outline-warning">Building</button>

   <button onClick={()=> fetchImageByCategory('sports')} type='button' className = "btn btn-outline-info">Sports </button>
   <button onClick={()=> fetchImageByCategory('transportation')} type='button' className = "btn btn-outline-light">Transportation </button>
   <button onClick={()=> fetchImageByCategory('travel')} type='button' className = "btn btn-outline-light">Travel </button>

    </div>
    <div className="search">

    <input type='text'  placeholder ='Search Here!' onChange={(e) => setQuery(e.target.value)} className='form-control bg-drak text-dark' style={{width:'40%',padding:'10px',}} />
    </div>
   </>
 
  )
}

export default Navbar
