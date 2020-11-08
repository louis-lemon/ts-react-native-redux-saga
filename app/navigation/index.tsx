import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import { DrawerContent } from '../components';
import { BottomTabNavigator } from './bottomTabs';

const AppNavigator = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name='Home' component={BottomTabNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
);

export default AppNavigator;
