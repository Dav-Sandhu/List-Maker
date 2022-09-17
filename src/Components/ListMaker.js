import {useReducer} from 'react'

const ListMaker = ({addItem, getItem, hide, setHide}) => {

  const reducer = (state, {type, payload}) => {
    switch(type){
      case "image":
        return {...state, image: payload}
      case "name":
        return {...state, name: payload}
      case "date":
        return {...state, date: payload}
      case "shape":
        return {...state, shape: payload}
      case "rank":
        if (payload >= 1 && payload <= 999){
          return {...state, rank: payload}
        }
  
        return state
      case "erase":
        return {
          image: "",
          name: "",
          date: "",
          rank: 1,
          shape: "rect"
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    image: "",
    name: "",
    date: "",
    rank: 1,
    shape: "rect"
  })

  const handleEvent = (e) => {
    dispatch({
      type: e.target.name,
      payload: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (getItem(state.rank) !== -1){
      alert("Warning: Item with the same rank already exists")
    }else{
      addItem(state)
      dispatch({
        type: "erase",
        payload: ""
      })
    }
  }

  return(
    <div className={hide ? "full-form" : "partial-form"}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          data-testid="name"
          value={state.name} 
          onChange={handleEvent}
          maxLength="50"
          required />

        <label htmlFor='date'>Date: </label>
        <input 
          type="text" 
          id="date" 
          name="date"
          placeholder='(optional)'
          data-testid="date" 
          value={state.date} 
          maxLength="16"
          onChange={handleEvent} />

        <label htmlFor='image'>Image Source: </label>
        <input 
          type="text" 
          id="image" 
          name="image"
          placeholder='(optional)'
          data-testid="image" 
          value={state.image} 
          onChange={handleEvent} />

        <div className="shape">
          {`Shape: `}
          <label 
            htmlFor='rect' 
            className={state.shape === "rect" ? "rect-select" : "rect"}>
              {state.shape === "rect" ? '▮' : '▯'}
          </label>
          <input 
            type="radio" 
            id="rect" 
            className="rect-radio" 
            name="shape" 
            value="rect" 
            onClick={handleEvent}/> 

          {` or `}

          <label 
            htmlFor='square' 
            className={state.shape === "square" ? "square-select" : "square"}>
              {state.shape === "square" ? '■' : '□'}
          </label>
          <input 
            type="radio" 
            id="square" 
            className="square-radio" 
            name="shape" 
            value="square" 
            onClick={handleEvent}/>
        </div>

        <label htmlFor='rank'>Rank: </label>
        <input 
          type="number" 
          id="rank" 
          name="rank"
          data-testid="rank"
          className="rank-input" 
          value={state.rank} 
          onChange={handleEvent}
          required />

        <input type="submit" className="submit" data-testid="submit" value="Add" />
      </form>
      <button className="hide" onClick={() => setHide(prev => !prev)}>{hide ? "Hide" : "Show"}</button>
    </div>
  )
}

export default ListMaker