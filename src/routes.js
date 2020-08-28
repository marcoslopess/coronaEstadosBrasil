import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import PageIndex from './pages/PageIndex'
import Dashboard from './pages/Dashboard'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PageIndex} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}