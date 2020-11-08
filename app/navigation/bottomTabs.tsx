import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppColors } from '@app/theme';

import { HomeStackNavigator, SearchStackNaivator } from './stack';
import { MyPageScreen } from '@app/screens';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => <AntDesign name="home" size={20} color={AppColors.primary} />,
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchStackNaivator}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: () => <AntDesign name="search1" size={20} color={AppColors.primary} />,
                }}
            />
            <Tab.Screen
                name="MyPage"
                component={MyPageScreen}
                options={{
                    tabBarLabel: 'MyPage',
                    tabBarIcon: () => <AntDesign name="user" size={20} color={AppColors.primary} />,
                }}
            />
        </Tab.Navigator>
    );
};
