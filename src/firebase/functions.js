import firebase from "./config";

export const PushToDB = (locations, data) => {
  const StoreRef = firebase.database().ref(locations);
  StoreRef.push(data);
};

export const UpdateDB = (location, id, object) => {
  if(location === "storage"){
    firebase.database().ref('storage').update(object);
  } else {
    firebase.database().ref(location).child(id).update(object);
  }
  
};
