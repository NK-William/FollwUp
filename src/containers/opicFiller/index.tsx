import {View} from 'react-native';
import React from 'react';
import getStyling from './style';

const OpicFiller = (props: React.PropsWithChildren) => {
  const styles = getStyling();
  return <View style={styles.container}>{props.children}</View>;
};

export default OpicFiller;
