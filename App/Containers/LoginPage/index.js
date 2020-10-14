import React, {useState} from 'react';
import {Flex, WingBlank, InputItem, Button} from '@ant-design/react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';

export default function LoginPage() {
  const initFormValue = {
    userName: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    password: yup.string().required('password is required'),
    userName: yup.string().required('user name is required'),
  });

  const {
    values: formValues,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
  } = useFormik({
    initialValues: initFormValue,
    validationSchema,
  });

  // const handleChange = (e) => console.log(e);

  const handleLogin = () => {
    console.log(errors, touched);
  };

  return (
    <WingBlank style={style.container}>
      <Flex
        justify="center"
        align="center"
        style={style.formWrapper}
        direction="column">
        <Flex justify="center" align="center" direction="column">
          <Image
            style={style.formLogo}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/The_Satanic_Temple.svg/1200px-The_Satanic_Temple.svg.png',
            }}
          />
          <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>
            Wellcome to the hell, Bitch!!
          </Text>
        </Flex>

        <Flex align="center" direction="column" style={{marginVertical: 10}}>
          <InputItem
            name="userName"
            style={{width: '100%'}}
            type="text"
            value={formValues.userName}
            placeholder="User name"
            onBlur={() => setFieldTouched('userName', true)}
            onChange={(value) => setFieldValue('userName', value)}
            error={touched.userName && errors.userName}></InputItem>

          {touched.userName && !!errors.userName && (
            <Flex justify="start" align="start">
              <Text style={style.errorMessageText}>{errors.userName}</Text>
            </Flex>
          )}

          <InputItem
            name="password"
            style={{width: '100%'}}
            type="password"
            value={formValues.password}
            onChange={(value) => setFieldValue('password', value)}
            onBlur={() => setFieldTouched('password', true)}
            placeholder="Password"
            error={touched.password && errors.password}></InputItem>

          {touched.password && !!errors.password && (
            <Flex justify="start" align="start">
              <Text style={style.errorMessageText}>{errors.password}</Text>
            </Flex>
          )}
        </Flex>

        <Flex style={{marginTop: 20}}>
          <Button
            onPress={handleLogin}
            size="large"
            type="ghost"
            style={{width: '80%'}}>
            Go
          </Button>
        </Flex>
      </Flex>
    </WingBlank>
  );
}

const style = StyleSheet.create({
  container: {
    height: '100%',
  },
  formWrapper: {
    height: '100%',
  },
  formLogo: {
    width: 100,
    height: 100,
  },
  errorMessageText: {
    color: 'red',
  },
});
