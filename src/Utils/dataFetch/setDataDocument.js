import { doc, setDoc } from "firebase/firestore";
import db from "../../Firebase/firebase";

const setDataDocument = (collectionPath, docId, dataSet) => {
  setDoc(doc(db, collectionPath, docId), dataSet)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};

export default setDataDocument;
