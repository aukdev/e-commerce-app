import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebase";

// const dbData = {};

const getDataFromSubCollection = (
  collectionName,
  documentId,
  subCollectionName,
  setFunction
) => {
  getDocs(
    collection(db, `${collectionName}/${documentId}/${subCollectionName}`)
  ).then((querySnapshot) => {
    console.log("data read form db");

    const dataArr = [];
    querySnapshot.forEach((doc) => {
      dataArr.push({ ...doc.data(), categoryId: doc.id });
    });
    //   dbData[collectionName] = dataArr;
    setFunction(dataArr);
  });
};

export default getDataFromSubCollection;
