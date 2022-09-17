import Item from "./Item"
import { useState } from "react"

const DisplayItems = ({
  items, 
  removeItem, 
  updateItem, 
  switchItems, 
  title, 
  setTitle}) => {

  const [imageView, setImageView] = useState([])

  return(
    <div className="items">
        <input 
          className="items-title"
          type="text" 
          placeholder="Enter a new title..."
          maxLength={50}
          value={title}
          onChange={(e) => setTitle(e.target.value)} />

      {items.map(i => {
        return( 
          <div key={i.rank}>
            <Item 
              item={i}
              removeItem={removeItem} 
              imageView={imageView} 
              setImageView={setImageView}
              switchItems={switchItems}
              updateItem={updateItem}/>
          </div>
      )})}
    </div>
  )
}

export default DisplayItems