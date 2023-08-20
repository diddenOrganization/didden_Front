import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, TouchableWithoutFeedback} from 'react-native';
import Logo from '../image/didden-clear.png';

function LogoComponent({tokenAcc, tokenRef}) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('home', {
          token_acc: tokenAcc,
          token_ref: tokenRef,
        });
      }}>
      <Image style={{height: 40}} source={Logo} />
    </TouchableWithoutFeedback>
  );
}

export default LogoComponent;
