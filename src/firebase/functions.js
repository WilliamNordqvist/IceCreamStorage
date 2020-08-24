import firebase from "./config";


export const PushStore = (data, locations) => {
  const StoreRef = firebase.database().ref(locations);
  StoreRef.push(data);
};


export const UpdateStore = ( location, id  ) => {
  firebase.database().ref(location).child(id)      
}

// .update({ name: "Östermalm", chairs:200 });