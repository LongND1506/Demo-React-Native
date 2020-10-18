import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import PrimaryButton from '../../Components/PrimaryButton';
import colors from '../../Themes/Colors';
import images from '../../Themes/Images';
import {Appbar} from 'react-native-paper';
import {Fonts} from '../../Themes';

const ForgotPassword = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneInput, setPhoneInput] = useState('096762626226');

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      console.log(phoneInput);
      setIsLoading(false);
    }, 3000);
  };
  return (
    <>
      <Appbar.Header style={styles.Appbar}>
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.BackAction
          onPress={() => navigation.goBack()}></Appbar.BackAction>
      </Appbar.Header>
      <View style={styles.pageContainer}>
        <View style={styles.logoWrapper}>
          <Image style={styles.securLogo} source={images.securIcon} />
          <Text style={styles.formTitle}> Forgot Password</Text>
        </View>
        <View style={styles.formWrapper}>
          <Text>
            To recover your password, you need to enter your registered phone
            number. We will send you new password to your phone.
          </Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Phone number</Text>
            <TextInput value={phoneInput} style={styles.formInput} />
          </View>

          <View style={styles.btnWrapper}>
            <PrimaryButton
              isLoading={isLoading}
              additionStyles={styles.submitBtn}
              text="Send"
              onPress={handleSubmit}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  Appbar: {
    width: '100%',
    backgroundColor: colors.primary,
    borderBottomWidth: 0,
  },
  pageContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 15,
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  securLogo: {
    width: 52,
    height: 70,
  },
  formTitle: {
    color: colors.white,
    marginTop: 10,
    fontSize: Fonts.style.h5.fontSize,
  },
  formWrapper: {
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 5,
    marginTop: 20,
  },
  inputWrapper: {
    marginVertical: 15,
  },
  formInput: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  submitBtn: {
    width: 152,
  },
  btnWrapper: {
    alignItems: 'center',
    marginVertical: 15,
  },
});
