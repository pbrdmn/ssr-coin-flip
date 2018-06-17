import React from 'react'
import Coin from '../containers/Coin'
import FlipButton from '../containers/FlipButton'

import './CoinFlip.css'

export default () => (
  <div className="coinFlip">
    <FlipButton />
    <Coin />
  </div>
)
