import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputText from '../components/InputText';
import CustomButton from '../components/CustomButton';

const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Kiểm tra tính hợp lệ của mật khẩu và xác nhận mật khẩu
    if (password !== confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp');
      return;
    }

    // Xử lý logic đăng ký tại đây
    alert(`Đăng ký thành công với tên: ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      <InputText
        placeholder="Nhập tên của bạn"
        onChangeText={setName}
        value={name}
      />
      <InputText
        placeholder="Nhập mật khẩu"
        onChangeText={setPassword}
        value={password}
        secureTextEntry // Ẩn chữ khi nhập để bảo mật
      />
      <InputText
        placeholder="Nhập lại mật khẩu"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry // Ẩn chữ khi nhập để bảo mật
      />
      <CustomButton
        title="Đăng ký"
        onPress={handleRegister}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
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

export default Register;
