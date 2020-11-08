import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MyPageScreen = () => {
    return (
        <View style={styles.container}>
            <Text>My Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MyPageScreen;
