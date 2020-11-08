import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import { AppColors, FontWeights, FontSizes } from '@app/theme';
import { SimpleButton } from '../../components';

const HomeScreen = props => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <SafeAreaView style={{alignSelf: 'stretch'}}>
                <View style={{ marginHorizontal: 32, marginTop: 32}}>
                    <View style={styles.topContainer}>
                        <SimpleButton title={'project'} onPress={() => navigation.push('Project')} />
                        <SimpleButton title={'task'} onPress={() => navigation.push('Task')}/>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.bgColor,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        ...FontWeights.Light,
        ...FontSizes.SubHeading,
    },
    body: {
        ...FontWeights.Light,
        ...FontSizes.Body,
    },
    item: {
        ...FontWeights.Light,
        ...FontSizes.Body,
        marginTop: 10,
    },
});

export default HomeScreen;
