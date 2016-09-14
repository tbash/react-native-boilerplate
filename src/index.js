import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { Provider } from 'react-redux';
import {
  Scene,
  Router,
  Schema,
  TabBar,
  Reducer,
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import configureStore from './store';

const ReduxRouter = connect()(Router);
const store = configureStore();

import App from './containers/App';
import styles, { DARKER, BLUE } from './containers/App/styles';

const TabIcon = ({ title, selected }) => {
  return (
    <Text style={{ color: this.props.selected ? BLUE : DARKER }}>
      <Icon name={this.props.title} size={30}/>
    </Text>
  );
}

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

const Root = () => {
  return (
    <Provider store={store}>
      <Router getSceneStyle={getSceneStyle}>
        <Scene key="root" hideNavBar hideTabBar>
          <Scene key="tabbar" component={TabBar}>
            <Scene
              key="main"
              tabs
              tabBarStyle={styles.tabBarStyle}
              tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
            >
              <Scene key="tab1" title="gear" icon={TabIcon} >
                <Scene
                  key="tab1_1"
                  component={App}
                  title="</>"
                />
              </Scene>
              <Scene key="tab2" initial title="user" icon={TabIcon}>
                <Scene
                  key="tab2_1"
                  component={App}
                  title="</>"
                />
              </Scene>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    </Provider>
  );
}

export default Root;
