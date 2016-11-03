import { connect } from 'react-redux'

import FirstScreen from '../components/FirstScreen'
import { navigatePush } from './NavContainer/actions'

const mapDispatchToProps = (dispatch) => ({
  onButtonPress() {
    dispatch(navigatePush({key: 'Second', title: 'Second'}))
  }
})

export default connect(null, mapDispatchToProps)(FirstScreen)
