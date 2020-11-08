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
                    tabBarLabel: '홈',
                    tabBarIcon: () => <AntDesign name="home" size={20} color={AppColors.primary} />,
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchStackNaivator}
                options={{
                    tabBarLabel: '검색',
                    tabBarIcon: () => <AntDesign name="search1" size={20} color={AppColors.primary} />,
                }}
            />
            <Tab.Screen
                name="MyPage"
                component={MyPageScreen}
                options={{
                    tabBarLabel: '마이페이지',
                    tabBarIcon: () => <AntDesign name="user" size={20} color={AppColors.primary} />,
                }}
            />
        </Tab.Navigator>
    );
};
