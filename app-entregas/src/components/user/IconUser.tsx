import React from 'react';
import { View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function IconUser() {
  return (
    <View>
        <FontAwesome5 name="user-circle" size={30} color="black" />
    </View>
  );
}