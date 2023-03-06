import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Text, Avatar, withStyles, List } from 'react-native-ui-kitten'

function FeedPage() {
    return (
      <View style={styles.feedStyle}>
        <Text>FEED</Text>
      </View>
    )
}

const Posts = [
  {
    id: 1,
    imageURL:
      'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg',
    nameHolder:
      'testing'
  },
  {
    id: 2,
    imageURL:
      'https://media.glamour.com/photos/5ea89429e67f360008b064d8/master/w_1172,h_1412,c_limit/Pink%20Anthurium.png',
    nameHolder:
      'testing again'
  }
]

const styles = StyleSheet.create({
    feedStyle: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

return (
  <List
    style={this.props.themedStyle.container}
    data={Posts}
    renderItem={renderItem}
    keyExtractor={Posts.id}
  />
)

export default FeedPage;