import {useState} from 'react'


const Settings = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [listOrder, setListOrder] = useState('asc')

  const changeMode = () => {
    setDarkMode(prev => !prev)
  }

  const updateListOrder = (order) => {
    if (order !== listOrder && (
      order === 'asc' || order === 'desc' || order === 'rand')){
        setListOrder(order)
    }
  }

  return [darkMode, listOrder, changeMode, updateListOrder]

}

export default Settings