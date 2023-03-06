import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import {MaterialIcons} from '@expo/vector-icons';

function TasksPage() {
    return (
      <View style={styles.completed}>
        <View style ={style.checkBox}>
          <Text style={styles.check}>{props.check}</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskDesc}>{props.taskDesc}</Text>
        </View>
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