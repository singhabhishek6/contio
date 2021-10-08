import React from 'react'
import { SearchStyle } from './SearchStyle'

export const SearchResult = () => {
    const x =[1,1,1,1,1]
    return (
       <SearchStyle>
           {
               x.map(el=>{
                   return (
                    <div class="a-box">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjhBaCE6_IlqbjxTdth5Hm0mccqejntA2XA&usqp=CAU" alt="user"/>
      </div>
    </div>
  </div>
  <div class="text-container">
    <h3>A blue bird</h3>
    <div>
      This a demo experiment to skew image container. It looks good.
  </div>
</div>
</div>
                   )
               })
           }
       </SearchStyle>
    )
}
