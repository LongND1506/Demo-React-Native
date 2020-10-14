import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon, TabBar } from '@ant-design/react-native';
import { ConfigRoute } from '../Navigation/AppNavigation';

const NavigationBottom = ({ navigation }) => {

    const [selectedIndex, setTabIndex] = useState(0)

    const handleSelectTab = (index, path) => {
        setTabIndex(index);
        navigation.push(path);

    }
    return (
        <TabBar unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
            {
                ConfigRoute.map(({ path, label, icon }, index) => (
                    icon ? <TabBar.Item
                        key={path}
                        title={label}
                        icon={<Icon name={icon} size="md" />}
                        selected={selectedIndex}
                        onPress={() => setTabIndex(index, path)}
                    >

                    </TabBar.Item> :<View></View>
                ))
            }
        </TabBar>
    )
}

export default NavigationBottom

const styles = StyleSheet.create({})
