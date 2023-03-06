import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import {MaterialIcons} from '@expo/vector-icons';

function TasksPage() {
    return (
      <View>
        <View style={styles.tasksStyle}>
          <Text>Complete at least one task per day!</Text>
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