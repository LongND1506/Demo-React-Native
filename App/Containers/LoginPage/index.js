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
  const [currentTabIndex, setTabIndex] = useState(0);

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
          {/* Switch Tab Section */}
          <View style={styles.switchTap}>
            {['Sign In', 'Sign Up'].map((text, idx) => (
              <View
                style={[
                  styles.switchTapItem,
                  currentTabIndex === idx ? styles.tabItemActive : {},
                ]}
                key={idx}>
                <Pressable onPress={() => setTabIndex(idx)}>
                  <Text>{text}</Text>
                </Pressable>
              </View>
            ))}
          </View>

          <View>
            {currentTabIndex === 0 ? (
              <>
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
                      tintColor={colors.pr}
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text>Remember me</Text>
                  </View>

                  <Text style={styles.linking}>Forgot Password ?</Text>
                </View>

                <View style={styles.buttonWrapper}>
                  <PrimaryButton
                    additionStyles={styles.submitButton}
                    text="Sign In"
                  />
                </View>
              </>
            ) : (
              <>
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Name</Text>
                  <TextInput
                    multiline={true}
                    style={styles.inputItem}
                    placeholder="Enter your name"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Phone number</Text>
                  <TextInput
                    multiline={true}
                    style={styles.inputItem}
                    placeholder="Enter your phone number"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}> Password</Text>
                  <TextInput
                    multiline={true}
                    style={styles.inputItem}
                    placeholder="Enter your password"
                  />
                </View>

                <View style={[styles.inputWrapper, {marginBottom: 20}]}>
                  <Text style={styles.label}>Confirm password</Text>
                  <TextInput
                    multiline={true}
                    style={styles.inputItem}
                    placeholder="Enter your password"
                  />
                </View>

                <View style={styles.buttonWrapper}>
                  <PrimaryButton
                    additionStyles={styles.submitButton}
                    text="Sign Up"
                  />
                </View>
              </>
            )}

            <View style={styles.policyWrapper}>
              <Text>By sign in or sign up, you agree to</Text>
              <Pressable>
                <Text style={styles.linking}>Sutrix’s Terms</Text>
              </Pressable>
              <Text>and</Text>

              <Pressable>
                <Text style={styles.linking}>Private Policy</Text>
              </Pressable>
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
    padding: 20,
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
    padding: 5,
    fontSize: 10,
    opacity: 0.6,
    fontWeight: 'bold',
    fontFamily: Fonts.type.svn,
  },
  tabItemActive: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 4,
    opacity: 1,
  },
  inputWrapper: {
    marginTop: 20,
  },
  inputItem: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    backgroundColor: colors.white,
  },
  label: {
    fontWeight: '300',
    fontSize: 14,
    fontFamily: Fonts.type.svn,
  },
  helperWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  formRemember: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginVertical: 10,
    alignItems: 'center',
  },
  submitButton: {
    width: 152,
    height: 55,
    justifyContent: 'center',
  },
  linking: {
    color: colors.primary,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  policyWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
