import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

function FriendsPage() {
    return (
      <View style={styles.friendsStyle}>
        <Text>Friends</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    friendsStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FriendsPage;