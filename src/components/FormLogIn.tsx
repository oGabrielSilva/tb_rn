import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TBContext } from '../context';
import fonts from '../utils/template';

const FormLogIn = () => {
  const { colors } = useContext(TBContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef<TextInput>(null);

  return (
    <View>
      <Text style={{ ...style.label, color: colors.text }}>Email: </Text>
      <TextInput
        style={{
          ...style.input,
          color: colors.text,
          borderColor: colors.text,
          backgroundColor: colors.primary,
        }}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(val) => setEmail(val)}
        autoComplete="email"
        onSubmitEditing={() => passwordRef.current?.focus()}
        returnKeyType="go"
      />
      <Text style={{ ...style.label, color: colors.text }}>Password: </Text>
      <TextInput
        ref={passwordRef}
        style={{
          ...style.input,
          color: colors.text,
          borderColor: colors.text,
          backgroundColor: colors.primary,
        }}
        value={password}
        onChangeText={(val) => setPassword(val)}
        secureTextEntry
        returnKeyType="send"
      />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    padding: 10,
    paddingVertical: 3,
    borderRadius: 10,
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.normal,
    marginBottom: 5,
  },
  label: {
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.normal,
    marginVertical: 15,
  },
});

export default FormLogIn;
