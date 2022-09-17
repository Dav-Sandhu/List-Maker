import {useState} from 'react'

function List(order) {
  const [list, setList] = useState([])

  const addItem = (item) => {
    setList(prev => [...prev, item])
    sortList(order)
  }

  const loadList = (newList) => {
    setList(JSON.parse(newList))
  } 

  const sortList = (o) => {
    if (o === 'asc'){
      setList(prev => prev.sort(function(a, b){return a.rank - b.rank}))
    }else if (o === 'desc'){
      setList(prev => prev.sort(function(a, b){return b.rank - a.rank}))
    }else{
      setList(prev => prev.sort(function(a, b){return Math.floor((Math.random() * 3) - 1)}))
    }
  }

  const getItem = (rank) => {    
    const item = list.find(e => e.rank === rank)

    if (item){
      return item
    }

    return -1
  }

  const updateItem = (rank, newRank, name, date) => {
    let item = getItem(rank)

    if (item === -1 || (getItem(newRank) !== -1 &&
      item.name === name &&
      item.date === date
    )){
      return -1
    }

    removeItem(rank)
    addItem({...item, rank: newRank, name: name, date: date})
  }

  const removeItem = (rank) => {
    setList(prev => prev.filter(prev => prev.rank !== rank))
  }

  const switchItems = (rank, newRank) => {

    let item = {...getItem(rank), rank: newRank}
    let item2 = {...getItem(newRank), rank: rank}
    
    removeItem(rank)
    removeItem(newRank)

    addItem(item)
    addItem(item2)
  }

  return [list, addItem, removeItem, getItem, updateItem, switchItems, sortList, loadList]
}

export default List