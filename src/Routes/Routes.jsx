import React from 'react'
import {Switch,Route} from "react-router-dom"
import { Mentor } from '../Components/SearchResults/Mentor'
import { SearchResult } from '../Components/SearchResults/SearchResult'
export const Routes = () => {
    return (
       <Switch>
           <Route exact path="/search/:data">
              <SearchResult/>
           </Route>
           <Route exact path="/search/:data/:id">
              <Mentor/>
           </Route>
       </Switch>
    )
}
