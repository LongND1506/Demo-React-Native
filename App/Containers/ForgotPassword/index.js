import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import PrimaryButton from '../../Components/PrimaryButton';
import colors from '../../Themes/Colors';
import images from '../../Themes/Images';
import {Fonts} from '../../Themes';
import AppbarBase from '../../Components/AppbarBase';

const ForgotPassword = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneInput, setPhoneInput] = useState('096762626226');
  const [isSent, setSentStatus] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      console.log(phoneInput);
      setIsLoading(false);
      setSentStatus(true);
    }, 3000);
  };
  return (
    <>
      <AppbarBase />

      <View style={styles.pageContainer}>
        <View style={styles.logoWrapper}>
          <Image style={styles.securLogo} source={images.securIcon} />
          <Text style={styles.formTitle}> Forgot Password</Text>
        </View>
        <View style={styles.formWrapper}>
          {isSent ? (
            <>
              <Text>The new password sent to your phone</Text>
              <Text>{phoneInput}</Text>
            </>
          ) : (
            <>
              <Text>
                To recover your password, you need to enter your registered
                phone number. We will send you new password to your phone.
              </Text>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Phone number</Text>
                <TextInput
                  value={phoneInput}
                  style={styles.formInput}
                  onChangeText={setPhoneInput}
                />
              </View>
            </>
          )}
          <View style={styles.btnWrapper}>
            <PrimaryButton
              isLoading={isLoading}
              additionStyles={styles.submitBtn}
              text={isSent ? 'Back to Sign in' : 'Send'}
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
    textTransform: 'uppercase',
    fontWeight: '300',
  },
  formWrapper: {
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '100%',
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
