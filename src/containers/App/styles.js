import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

export const DARKER   = '#282C37';
export const DARK     = '#566270';
export const LIGHTER  = '#FFFFF3';
export const LIGHT    = '#E0E3DA';
export const PURPLE   = '#A593E0';
export const BLUE     = '#2B90D9';
export const RED      = '#DF405A';

export default styles;
