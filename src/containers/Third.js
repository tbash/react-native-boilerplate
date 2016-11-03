import { connect } from 'react-redux';

import ThirdScreen from '../components/ThirdScreen';
import { navigateReset } from './NavContainer/actions';

const mapDispatchToProps = (dispatch) => ({
  onButtonPress() {
    dispatch(navigateReset());
  }
})

export default connect(null, mapDispatchToProps)(ThirdScreen);
