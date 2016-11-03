import { connect } from 'react-redux'

import ThirdScreen from '../components/ThirdScreen'
import { navigateReset } from './NavContainer/actions'


const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			let routes = [{ key: 'First', title: 'First' }],
					index = 0;
			dispatch(navigateReset({routes, index}))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ThirdScreen)
