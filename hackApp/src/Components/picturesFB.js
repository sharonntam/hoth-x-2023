import firebase from 'react-native-firebase'
import uuid from 'uuid'

function picturesFB(){
    uploadPic: pic => {
        const id = uuid.v4()
        const uploadData = {
            id: id,
            photo: pic.photo
        }

        return firebase
            .firestore()
            .collection('pic')
            .doc(id)
            .set(uploadData)
    }

    getPic: () => {
        return firebase
            .firestore()
            .collection('pic')
            .get()
            .then(function(queryPic){
                let pictures = queryPic.docs.map(doc => doc.data())
                console.log(pictures)
                return pictures
            })

            .catch(function(error){
                console.log('Error getting documents: ', error)
            })
    }
}

export default picturesFB