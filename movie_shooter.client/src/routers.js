import React, {Component} from 'react'

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import HomePage from './components/HomePage/HomePage'


class Routers extends Component{
    render() {
        return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage}/>
            </Switch>
        </BrowserRouter>
        )
    }
}

export default Routers