import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';

function HomePage({navigation}) {

    return (
      <View style={styles.homeStyle}>
        {/* <Text>HOME</Text> */}
        <Button style={styles.buttonStyle} title='Tasks' onPress={() => navigation.navigate('tasks')} />
        <Button style={styles.buttonStyle} title='Feed' onPress={() => navigation.navigate('feed')} />
        <Button style={styles.buttonStyle} title='Friends' onPress={() => navigation.navigate('friends')} />
        <Button style={styles.buttonStyle} title='Submit Picture' onPress={() => navigation.navigate('picture')} />
      </View>
    );
}

const styles = StyleSheet.create({
    homeStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '5%',
        paddingBottom: '25%',
    },

    buttonStyle: {
        padding: 5,
        fontSize: 30,
        borderWidth: 1,
        color: "black",
    }

});

export default HomePage;