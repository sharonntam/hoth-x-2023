import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

function PicturePage() {
    return (
      <View style={styles.pictureStyle}>
        <Text>TAKE A PIC</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    pictureStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PicturePage;