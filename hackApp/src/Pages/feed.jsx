//import React, {Component} from 'react'
//import { StyleSheet} from 'react-native'
//import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
//import { List } from 'react-native-ui-kitten'
//import { Avatar, withStyles, List } from 'react-native-ui-kitten'

const POSTS = [];



function feed(){
  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });

        POSTS.push(response)
      }
    });

  }

  return POSTS
}


/*
const POSTS = [
  {
    id: 1,
    imageURL:
      'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg',
  },
  {
    id: 2,
    imageURL:
      'https://media.glamour.com/photos/5ea89429e67f360008b064d8/master/w_1172,h_1412,c_limit/Pink%20Anthurium.png',
  }
]
*/
/*
function FeedPage() {
  return(
    <List
        style={this.props.themedStyle.container}
        data={POSTS}
        renderItem={renderItem}
        keyExtractor={POSTS.id}
      />
  )
}
*/

export default feed
