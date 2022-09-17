import ListMaker from "./ListMaker"
import List from './List'
import DisplayItems from "./DisplayItems"
import Settings from "./Settings"
import Options from "./Options"
import {useState} from 'react'

function App() {

  const [title, setTitle] = useState("")
  const [hide, setHide] = useState(false)
  const [darkMode, listOrder, changeMode, updateListOrder]= Settings()
  const [list, addItem, removeItem, getItem, updateItem, switchItems, sortList, loadList] = List(listOrder)

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="settings">
        <ListMaker 
          addItem={addItem} 
          getItem={getItem}
          hide={hide}
          setHide={setHide} />
        <Options 
          darkMode={darkMode}
          listOrder={listOrder}
          changeMode={changeMode}
          updateListOrder={updateListOrder}
          sortList={sortList}
          title={title} 
          list={list} 
          loadList={loadList}
          setTitle={setTitle}
          hide={hide}/>
      </div>
      <DisplayItems 
        items={list} 
        removeItem={removeItem} 
        updateItem={updateItem} 
        switchItems={switchItems}
        title={title}
        setTitle={setTitle}/>
    </div>
  )
}

export default App