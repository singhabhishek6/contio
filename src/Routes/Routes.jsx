import React from 'react'
import {Switch,Route} from "react-router-dom"
import { SearchResult } from '../Components/SearchResults/SearchResult'
import { LandingPage } from '../pages/LandingPage'

export const Routes = () => {
    return (
       <Switch>
<Route exact path='/'>
                <LandingPage />
            </Route>
           <Route exact path="/search/:data">
              <SearchResult/>
           </Route>
       </Switch>
    )
}
