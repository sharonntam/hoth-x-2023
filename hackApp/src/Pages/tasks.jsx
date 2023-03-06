import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import {MaterialIcons} from '@expo/vector-icons';

function TasksPage() {
    return (
      <View style={styles.tasksStyle}>
        <Text style={styles.taskTitleStyle}>Complete at least one task per day!</Text>
        <Text style={styles.taskListStyle}>1. Buy second hand goods - thrifting, etc.</Text>
        <Text style={styles.taskListStyle}>2. Donate used goods</Text>
        <Text style={styles.taskListStyle}>3. Drink from a reusable water bottle all day!</Text>
        <Text style={styles.taskListStyle}>4. Unplug electronics that are not in use</Text>
        <Text style={styles.taskListStyle}>5. Use environmentally friendly transporation methods - walk, bike, etc.</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    tasksStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '5%',
        paddingBottom: '25%',
        paddingLeft: '5%',
        paddingRight: '5%',
    },

    taskTitleStyle: {
      fontSize:20,
    },

    taskListStyle: {
      fontSize:15,
    },
});

export default TasksPage;