import {useState} from 'react'

const Item = ({
  item, 
  removeItem, 
  imageView, 
  setImageView, 
  updateItem, 
  switchItems}) => {

  const [curRank, setCurRank] = useState(item.rank)

  if (imageView.indexOf(item.rank) === -1){
    return(
      <div className="item" data-testid="item">
        <button 
          className={item.shape === "rect" ? "remove-button-rect" : "remove-button-square"} 
          onClick={() => {
            setImageView(prev => prev.filter(e => e !== item.rank))
            removeItem(item.rank)
          }}>
            Remove
        </button>

        <div className="item-image-rank">
          <form className="rank" onSubmit={
            (e) => {
              e.preventDefault()

              if(curRank !== item.rank){
                if (updateItem(
                  item.rank, 
                  curRank, 
                  item.name, 
                  item.date) === -1){
                    switchItems(item.rank, curRank)
                    setCurRank(item.rank)
                }
              }
            }}>
            <input 
              className={item.rank < 99 ? "small-rank" : "large-rank"}
              type="text" 
              maxLength="3"
              onBlur={() => setCurRank(item.rank)}
              value={curRank}
              onChange={(e) => {
                const updateRank = e.target.value

                if (!isNaN(parseInt(updateRank))){
                  setCurRank(updateRank)
                }
              }}/>
              <input type="submit" style={{display: "none"}}/>
            </form>

          <img 
            className={item.shape === "rect" ? "item-picture-rect" : "item-picture-square"}
            src={item.image} 
            onError={() => setImageView(prev => [...prev, item.rank])}
            alt="not found" />
        </div>

        <div className="item-name">
            <input 
              className="item-title"
              type="text" 
              style={{width: item.name.length + 'ch'}}
              value={item.name}
              onChange={(e) => updateItem(item.rank, item.rank, e.target.value, item.date)}/>
            {item.date.length > 0 ? '(' : ""}
            <input
              className="item-title"
              type="text"
              style={{width: item.date.length + 'ch'}}
              value={item.date}
              onChange={(e) => updateItem(item.rank, item.rank, item.name, e.target.value)}/>
            {item.date.length > 0 ? ')' : ""}
        </div>
      </div>
    )
  }

  return(
    <div className="imageless-item">
      <h2 className="imageless-rank">{`${item.rank}. `}</h2>

      <div className="imageless-item-name">
        {`${item.name} ${item.date.length > 0 ? `(${item.date})` : ""}`}
      </div>

      <button 
        className="imageless-remove-button" 
        onClick={() => {
          setImageView(prev => prev.filter(e => e !== item.rank))
          removeItem(item.rank)
        }}>
          Remove
      </button>
    </div>
  )
}

export default Item