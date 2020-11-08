import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppColors } from '@app/theme';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const DrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <View style={styles.container}>
            <Text>Drawer content</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.bgColor
    },
});

export default DrawerContent;
