import StoredLists from "./StoredLists"
import {useState} from 'react'

const Options = ({
  darkMode, 
  listOrder, 
  changeMode, 
  updateListOrder,
  sortList,
  title,
  list,
  loadList,
  setTitle,
  hide}) => {

  const [keys, setKeys] = useState(Object.keys(localStorage))

  return(
    <div className={hide ?  "options" : "options-hide"}>
      <h3>Settings</h3>
      <div className="option">
        <span className="dark-mode-checkbox">
          <label htmlFor='dark'>Dark Mode: </label>
          <input 
            type="checkbox" 
            id="dark" 
            className="dark"
            checked={darkMode} 
            onChange={changeMode} />
        </span>
      </div>
      <div className="option">
        <span className="list-order">
          <label htmlFor="list-order">Order: </label>
          <select 
            id="list-order"
            value={listOrder} 
            onChange={(e) => {
              updateListOrder(e.target.value)
              sortList(e.target.value)
            }}>
              <option value='asc'>Ascending</option>
              <option value='desc'>Descending</option>
              <option value='rand'>Random</option>
          </select>
        </span>
      </div>
      <div className="option">
        <button onClick={() => {
          localStorage.setItem(title, JSON.stringify(list))
          setKeys(Object.keys(localStorage))
          }}>Save List</button>
      </div>
      <div className="option">
        <StoredLists 
          loadList={loadList}
          setTitle={setTitle}
          keys={keys}
          setKeys={setKeys}/>
      </div>
    </div>
  )
}

export default Options