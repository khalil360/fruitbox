import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
 const [fruits,setfruits]=useState(['Apple', 'Banana', 'orange', 'mango', 'Pineapple', 'Watermelon'])
 const[newfruits,setnewfruits]=useState(fruits)

const handleChange = (e) => {
  const Uinput = e.target.value;
 const filtered = fruits.filter(fruit=> fruit.toLowerCase().includes(Uinput.toLowerCase()))
 setnewfruits(filtered)
}
 
  return (
    <div className='search'>
       <div className='sinput'><h1>Search :</h1><input type='text' placeholder='write a fruit name ...' onChange={handleChange}/></div>    
       <div className='dataresult'>{newfruits.length === 0 ? (<div><h1>content not found </h1></div>) : (newfruits.map(fruit => <h3 key={fruit}>{fruit}</h3>))}</div>  
    </div>
  )
}

export default SearchBar
