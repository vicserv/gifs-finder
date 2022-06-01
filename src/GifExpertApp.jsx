import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"
import 'animate.css'
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])
  return (
    <>
    <h2>Gifs Finder</h2>
    <AddCategory setCategories={setCategories}/>
    <hr />
    
    <ol>
        {
            categories.map((category, i) => (
                <GifGrid 
                  key={category + i}
                  category={category}
                />
            ))
        }
    </ol>
    </>
  )
}