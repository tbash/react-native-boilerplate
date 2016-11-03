import { connect } from 'react-redux'

import ModalScreen from '../components/ModalScreen'
import { navigatePop } from './NavContainer/actions'

const mapDispatchToProps = (dispatch) => ({
  onButtonPress() {
    dispatch(navigatePop())
  }
})

export default connect(null, mapDispatchToProps)(ModalScreen)
