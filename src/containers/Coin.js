import { connect } from 'react-redux'

import Coin from '../components/Coin'

const mapStateToProps = ({ coin }) => ({ coin })

export default connect(mapStateToProps, {})(Coin)
