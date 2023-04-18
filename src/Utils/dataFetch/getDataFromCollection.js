import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebase";

const dbData = {};

const getDataFromCollection = (collectionName, setFunction) => {
  if (dbData[collectionName] && dbData[collectionName].length > 0) {
    setFunction(dbData[collectionName]);
  } else {
    getDocs(collection(db, collectionName)).then((querySnapshot) => {
      console.log("data read form db");

      const dataArr = [];
      querySnapshot.forEach((doc) => {
        dataArr.push({ ...doc.data(), categoryId: doc.id });
      });
      dbData[collectionName] = dataArr;
      setFunction(dataArr);
    });
  }
};

export default getDataFromCollection;
