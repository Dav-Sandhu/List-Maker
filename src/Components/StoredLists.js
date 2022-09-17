const StoredLists = ({loadList, setTitle, keys, setKeys}) => {

  return(
    <div className="stored-lists">
      <h4>Stored Lists</h4>
      {keys.length < 1 ? `none` : ``}
      {keys.map(k => {
        return(
          <div key={k} >
            <button
              className="load-button" 
              onClick={() => {
              loadList(localStorage.getItem(k))
              setTitle(k)
            }}>{k === "" ? "untitled list" : k}</button>

            <button
              className="delete-stored-list-button"
              onClick={() => {
                localStorage.removeItem(k)
                setKeys(Object.keys(localStorage))
                }}>
                ⨉
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default StoredLists