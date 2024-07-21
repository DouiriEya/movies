import React from 'react'

function Filter({titleSearched , setTitleSearched , ratingSearched , setRatingSearched}) {
  return (
    <div>
        <input type='text' placeholder='type the title you wanna filter by ❤️' 
        value={titleSearched}
        onChange={(e)=>setTitleSearched(e.target.value)}
        />
          <input type='number' placeholder='type the rating you wanna filter by ❤️' 
        value={ratingSearched}
        onChange={(e)=>setRatingSearched(e.target.value)}
        />
      
    </div>
  )
}

export default Filter
