import { useState } from 'react'
import './App.css'
import FoodData from "./resources/FoodData"
import Search from './components/search'
import Food from './components/food'


function App() {
  const [search,setSearch] = useState("")
  const filterSearch = FoodData.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      {console.log(FoodData)}
      <h1>Pro-Nutrition App</h1>
      <Search setSearch = {setSearch}/>

      <div className="items">
      {
        filterSearch.length <=0 ? (
          <h3>No Results Found</h3>
          ) : (
          filterSearch.map((item,index) => (
              <Food key = {index} element = {item} index = {index}/>
          ))
        )
      }
      </div>
      
    </> 
  )
}

export default App
