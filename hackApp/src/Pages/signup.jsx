import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

function SignUpPage() {
    return (
      <View style={styles.signupStyle}>
        <Text>App Name</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    signupStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SignUpPage;
