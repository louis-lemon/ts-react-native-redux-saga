import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppColors } from '@app/theme';

interface IProps {
    id: string;
    name: string;
    point: number;
}

const TaskItem = (props: IProps) => {
    return (
        <View style={styles.container}>
            <Text>{props.id}</Text>
            <Text>{props.name}</Text>
            <Text>{props.point}</Text>
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

export default TaskItem;
