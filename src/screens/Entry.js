import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import Login from './Login';
import Register from './Register';
const Entry = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('D:/Hoc Tap/React native/newbie/src/assets/logo.jpg')} style={styles.image} />
      <CustomButton
        title={'Đăng nhập'}
        onPress={() => navigation.navigate('Login')}
      >
      </CustomButton>
      <CustomButton
        title={'Đăng ký'}
        onPress={() => navigation.navigate('Register')}
      >
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },

});

export default Entry;
