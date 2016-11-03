import { connect } from 'react-redux';

import SecondScreen from '../components/SecondScreen';
import { navigatePush } from './NavContainer/actions';


const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush({key: 'Third', title: 'Third'}))
		},
		onModalButtonPress: () => {
			dispatch(navigatePush({key: 'Modal', title: 'Modal'}))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SecondScreen)
