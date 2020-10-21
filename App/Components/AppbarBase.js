import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {NavigationContext} from 'react-navigation';
import colors from '../Themes/Colors';
import images from '../Themes/Images';

const AppbarBase = ({title = ''}) => {
  const navigation = useContext(NavigationContext);

  return (
    <>
      <Appbar.Header style={styles.Appbar}>
        <Appbar.Action
          size={25}
          icon={images.icBackWhite}
          color={colors.white}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content title={title} />
      </Appbar.Header>
    </>
  );
};

export default AppbarBase;

const styles = StyleSheet.create({
  Appbar: {
    width: '100%',
    backgroundColor: colors.primary,
    borderBottomWidth: 0,
    elevation: 0,
  },
});
