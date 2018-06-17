import React from 'react'
import PropTypes from 'prop-types'

import './FlipButton.css'

const FlipButton = ({ flip }) => (
  <div className="flipButton">
    <button onClick={flip}>Flip Coin</button>
  </div>
)

FlipButton.propTypes = {
  flip: PropTypes.func.isRequired,
}
export default FlipButton
