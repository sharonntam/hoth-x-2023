import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';

function HomePage({navigation}) {
    return (
      <View style={styles.homeStyle}>
        <Text>HOME</Text>
        <Button title='Tasks' onPress={() => navigation.navigate('tasks')} />
        <Button title='Feed' onPress={() => navigation.navigate('feed')} />
        <Button title='Friends' onPress={() => navigation.navigate('friends')} />
        <Button title='Submit Picture' onPress={() => navigation.navigate('picture')} />
      </View>
    );
}

const styles = StyleSheet.create({
    homeStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomePage;