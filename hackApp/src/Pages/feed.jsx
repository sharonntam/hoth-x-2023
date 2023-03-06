import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {firebase} from '../Firebase/firebase';

function FeedPage() {
    return (
      console.log(firebase);
      
      <View style={styles.feedStyle}>
        <Text>FEED</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    feedStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FeedPage;