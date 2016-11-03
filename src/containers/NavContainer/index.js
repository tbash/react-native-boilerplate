/*
 *
 * NavContainer
 *
 */

import React from 'react'
import {
  NavigationExperimental,
  View,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux';
import selectNavContainer from './selectors';
import styles from './styles';
import { navigatePop } from './actions'

import First from '../First'
import Second from '../Second'
import Third from '../Third'
import Modal from '../Modal'

const {
  CardStack: NavigationCardStack,
  Card: NavigationCard,
  Header: NavigationHeader
} = NavigationExperimental


class NavContainer extends React.Component {
  render() {
    let { backAction, ...navigationState } = this.props

    return (

      // Redux is handling the reduction of our state for us. We grab the navigationState
      // we have in our Redux store and pass it directly to the <NavigationCardStack />.
      <NavigationCardStack
        navigationState={navigationState}
        onNavigateBack={backAction}
        style={styles.container}
        direction={navigationState.routes[navigationState.index].key === 'Modal' ?
          'vertical' : 'horizontal'
        }
        renderHeader={props => (
          <NavigationHeader
            {...props}
            onNavigateBack={backAction}
            renderTitleComponent={props => {
              const title = props.scene.route.title
              return <NavigationHeader.Title>{title}</NavigationHeader.Title>
            }}
            // When dealing with modals you may also want to override renderLeftComponent...
          />
        )}
        renderScene={this._renderScene}
      />
    )
  }

  _renderScene({scene}) {
    const { route } = scene

    switch(route.key) {
    case 'First':
      return <First />
    case 'Second':
      return <Second />
    case 'Third':
      return <Third />
    case 'Modal':
      return <Modal />
    }
  }
}

NavContainer.propTypes = {
  navigationState: React.PropTypes.object,
  backAction: React.PropTypes.func.isRequired
}

const mapStateToProps = selectNavContainer();

const mapDispatchToProps = (dispatch) => ({
  backAction: () => {
    dispatch(navigatePop())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
