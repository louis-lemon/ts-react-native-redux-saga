import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, TaskScreen, ProjectScreen, SearchScreen} from '@app/screens';
import { Header } from '@app/components';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
            headerMode='screen'
            screenOptions={{
                header: ({ scene, previous, navigation }) => (
                    <Header scene={scene} previous={previous} navigation={navigation} />
                ),
            }}
        >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Project' component={ProjectScreen} />
            <Stack.Screen name='Task' component={TaskScreen} options={{ headerTitle: 'Task' }} />
        </Stack.Navigator>
    );
};

export const SearchStackNaivator = () => {
    return (
        <Stack.Navigator
            initialRouteName='SearchScreen'
            headerMode='screen'
            screenOptions={{
                header: ({ scene, previous, navigation }) => (
                    <Header scene={scene} previous={previous} navigation={navigation} />
                ),
            }}
        >
            <Stack.Screen name='Search' component={SearchScreen} />
        </Stack.Navigator>
    );
}
