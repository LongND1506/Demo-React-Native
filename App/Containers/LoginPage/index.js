import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Fonts, Images} from '../../Themes';
import colors from '../../Themes/Colors';
import PrimaryButton from '../../Components/PrimaryButton';

const LoginPage = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.loginPage}>
      <ScrollView>
        <View style={styles.topLogoWrapper}>
          <Image style={styles.topLogo} source={Images.sutrixLogo} />
        </View>
        <View style={styles.savingMoneyWrapper}>
          <Image style={styles.savingMoneyLogo} source={Images.savingMoney} />
          <Text style={styles.savingMoneyText}>Saving Money</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.switchTap}>
            {['Sign In', 'Sign Up'].map((text, idx) => (
              <View style={styles.switchTapItem} key={idx}>
                <Pressable>
                  <Text>{text}</Text>
                </Pressable>
              </View>
            ))}
          </View>
          <View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                multiline={true}
                style={styles.inputItem}
                placeholder="Phone Number"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                multiline={true}
                style={styles.inputItem}
                placeholder="Password"
              />
            </View>

            <View style={styles.helperWrapper}>
              <View style={styles.formRemember}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text>Remember me</Text>
              </View>

              <Text style={styles.linking}>Forgot Password ?</Text>
            </View>

            <View style={{marginVertical: 20, alignItems: 'center'}}>
              <PrimaryButton additionStyles={{width: 155}} text="Sign In" />
            </View>

            <View style={styles.policyWrapper}>
              <Text>
                By sign in or sign up, you agree to Sutrix’s Terms and Private
                Policy
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  loginPage: {
    padding: 10,
    flex: 1,
    backgroundColor: colors.primary,
  },
  topLogoWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
  topLogo: {
    width: 150,
    height: 30,
  },
  savingMoneyWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    textTransform: 'uppercase',
  },
  savingMoneyLogo: {
    width: 70,
    height: 70,
    marginBottom: 20,
  },
  savingMoneyText: {
    color: colors.white,
    fontSize: Fonts.size.h3,
  },
  form: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 5,
    shadowColor: colors.darkGrey,
  },
  switchTap: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  switchTapItem: {
    marginRight: 15,
    paddingBottom: 5,
    fontSize: 10,
    fontWeight: '600',
    opacity: 0.6,
  },
  inputWrapper: {
    marginTop: 20,
  },
  inputItem: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.white,
  },
  label: {
    fontWeight: '300',
    fontSize: 14,
  },
  helperWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  formRemember: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitButton: {
    width: 152,
    height: 52,
  },
  linking: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  policyWrapper: {
    marginVertical: 15,
  },
});
