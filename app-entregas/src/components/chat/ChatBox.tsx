import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ChatBox() {
  return (
    <View >
      <Ionicons name="chatbubble-ellipses" size={30} color="black" />
    </View>
  );
}