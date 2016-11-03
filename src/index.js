import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import NavContainer from './containers/NavContainer'

const store = configureStore();

const App = () => {
	return (
		<Provider store={store}>
			<NavContainer />
		</Provider>
	)
}

export default App;
