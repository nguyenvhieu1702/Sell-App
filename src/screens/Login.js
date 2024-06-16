import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import InputText from '../components/InputText';
import Home from './Home';

const Login = ({ navigation }) => {
  const [nameLogin, setNameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home')

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <InputText
        placeholder="Nhập tên của bạn"
        onChangeText={setNameLogin}
        value={nameLogin}
      />
      <InputText
        placeholder="Nhập mật khẩu"
        onChangeText={setPasswordLogin}
        secureTextEntry
        value={passwordLogin}
      />
      <CustomButton
        onPress={(handleLogin)}
        title="Xác nhận"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Login;
