import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import CoinFlip from './CoinFlip'
import AboutPage from '../components/AboutPage'
import NoMatch from '../components/NoMatch'

import './App.css'

export default () => (
  <div>
    <div className="header">
      <h1>Coin Flip</h1>
      <Link href="/" to="/">Coin</Link>
      <Link href="/about" to="/about">About</Link>
    </div>

    <Switch>
      <Route exact path="/" component={CoinFlip} />
      <Route path="/about" component={AboutPage} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)
