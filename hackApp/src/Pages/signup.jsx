import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import * as React from 'react';

function SignUpPage({navigation}) {
    return (
      <View style={styles.signupStyle}>
        <Text>App Name</Text>
        <Button title='Home' onPress={() => navigation.navigate('home')} />
      </View>
    );
}

const styles = StyleSheet.create({
    signupStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default SignUpPage;
