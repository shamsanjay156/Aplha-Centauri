import React from 'react';
import {View, Text} from 'react-native';
import {commonStyle} from '../../common/commonStyle';

export const CartScreen: React.FC = () => {
  return (
    <View style={commonStyle.container}>
      <Text style={{color: 'black'}}>Cart Screen</Text>
    </View>
  );
};
