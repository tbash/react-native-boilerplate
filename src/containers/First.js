import { connect } from 'react-redux'

import FirstScreen from '../components/FirstScreen'
import { navigatePush } from './NavContainer/actions'

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush({key: 'Second', title: 'Second'}))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FirstScreen)
