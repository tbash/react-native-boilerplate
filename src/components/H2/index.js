/**
*
* H2
*
*/

import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const H2 = ({style, children}) => {
  return (
    <Text style={[styles.container, style]}>
      {children}
    </Text>
  );
}

export default H2;
