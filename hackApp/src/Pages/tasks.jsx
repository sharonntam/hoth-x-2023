import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

function TasksPage() {
    return (
      <View style={styles.tasksStyle}>
        <Text>TASKS</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    tasksStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TasksPage;