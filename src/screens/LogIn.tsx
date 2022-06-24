import React, { useContext } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FormLogIn from '../components/FormLogIn';
import Section from '../components/Section';
import { TBContext } from '../context';
import fonts from '../utils/template';

const LogIn = () => {
  const { colors } = useContext(TBContext);

  return (
    <View style={{ ...style.container, backgroundColor: colors.primary }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text style={{ ...style.icon, color: colors.text }}>T_B</Text>
        <Section>
          <Text style={{ ...style.signText, color: colors.text }}>Sign in</Text>
          <Text style={{ ...style.signText2, color: colors.secundary }}>
            Welcome back.
          </Text>
        </Section>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Section>
            <FormLogIn />
          </Section>

          <Section>
            <TouchableOpacity
              style={{ ...style.button, backgroundColor: colors.secundary }}>
              <Text
                style={{
                  fontFamily: fonts.montserratBold,
                  fontSize: fonts.sizes.normal,
                  marginTop: 0,
                  color: colors.text,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </Section>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: StatusBar.currentHeight,
  },
  icon: {
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.sub,
    marginBottom: 10,
  },
  signText: {
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.title,
  },
  signText2: {
    fontFamily: fonts.montserrat,
    fontSize: fonts.sizes.normal,
    marginTop: 10,
  },
  button: {
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default LogIn;
