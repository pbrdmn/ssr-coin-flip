import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { flip } from '../actions/coin'
import FlipButton from '../components/FlipButton'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  flip: bindActionCreators(flip, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(FlipButton)
