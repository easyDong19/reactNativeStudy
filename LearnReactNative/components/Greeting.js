import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  return (
    <View>
      <Text>안녕하세 함수 컴포넌트!@ {props.name}</Text>
    </View>
  );
}

export default Greeting;
