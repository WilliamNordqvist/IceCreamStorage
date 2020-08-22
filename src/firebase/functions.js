import firebase from './config'

export const PushStore = (data) => {
  const itemsRef = firebase.database().ref('stores');
  itemsRef.push(data)
}


