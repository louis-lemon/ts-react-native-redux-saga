import React, {useEffect} from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { AppColors } from '@app/theme';
import useTask from '../../hooks/useTask';
import { TaskItem } from '@app/components';

const TaskScreen = () => {

    const { tasks, fetchTasks } = useTask();
    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView style={{alignSelf: 'stretch'}}>
                <View style={{ marginHorizontal: 32, marginTop: 32}}>
                    <View style={styles.topContainer}>
                        {tasks.map((task, index) => <TaskItem key={index} {...task} />)}
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
});

export default TaskScreen;
