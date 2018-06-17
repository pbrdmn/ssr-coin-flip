import React from 'react'
import PropTypes from 'prop-types'

import './Coin.css'

const Coin = ({ coin }) => (
  <div>
    {
      (coin.face === 'UNKNOWN')
        ? <p className="coin">Flip the coin!</p>
        : <p>The coin is {coin.face}</p>
    }

    <div className={`coin coin${coin.face}`}>
      <div className="coinFace coinFaceTAILS">TAILS</div>
      <div className="coinFace coinFaceHEADS">HEADS</div>
    </div>
  </div>
)

Coin.propTypes = {
  coin: PropTypes.shape({
    face: PropTypes.oneOf(['HEADS', 'TAILS']),
  }).isRequired,
}

export default Coin
