import { connect } from 'react-redux';

import SecondScreen from '../components/SecondScreen';
import { navigatePush } from './NavContainer/actions';

const mapDispatchToProps = (dispatch) => ({
  onButtonPress() {
    dispatch(navigatePush({key: 'Third', title: 'Third'}))
  },
  onModalButtonPress() {
    dispatch(navigatePush({key: 'Modal', title: 'Modal'}))
  }
})

export default connect(null, mapDispatchToProps)(SecondScreen)
