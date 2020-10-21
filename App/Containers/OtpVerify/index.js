import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../../Themes/Colors';
import AppbarBase from '../../Components/AppbarBase';
import images from '../../Themes/Images';
import {Fonts} from '../../Themes';
import PrimaryButton from '../../Components/PrimaryButton';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const OtpVerify = () => {
  const [pintCode, setPin] = useState('');

  return (
    <>
      <AppbarBase />
      <View style={styles.otpVerify_container}>
        <View style={styles.otpVerify_formHeader}>
          <Image
            style={styles.otpVerify_formHeader_logo}
            source={images.icOtp}
          />
          <Text style={styles.otpVerify_formHeader_text}>OTP VERIFICATION</Text>
        </View>

        <View style={styles.otpVerify_formContent}>
          <Text>
            To active your account. Please type the verification code sent to
          </Text>
          <Text>**** *** 456</Text>

          <View>
            <SmoothPinCodeInput
              placeholder="-"
              value={pintCode}
              onTextChange={setPin}
              codeLength={6}
              cellStyle={styles.otpVerify_cellInput}
            />
          </View>

          <PrimaryButton
            text="Verify"
            additionStyles={styles.otpVerify_button}
          />
        </View>
      </View>
    </>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  otpVerify_container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
  },
  otpVerify_formHeader: {
    alignItems: 'center',
  },
  otpVerify_formHeader_logo: {
    width: 50,
    height: 75,
  },
  otpVerify_formHeader_text: {
    marginVertical: 20,
    textTransform: 'uppercase',
    color: colors.white,
    fontSize: Fonts.style.h5.fontSize,
  },
  otpVerify_formContent: {
    width: '100%',
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    alignItems: 'center',
  },
  otpVerify_cellInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.darkGrey,
  },
  otpVerify_button: {
    width: 167,
    height: 52,
    marginTop: 20,
  },
});
