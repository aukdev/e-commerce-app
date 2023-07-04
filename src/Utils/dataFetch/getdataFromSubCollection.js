import { collection, getDocs } from "firebase/firestore";
import db from "../../Firebase/firebase";

const dbData = {};

const getDataFromSubCollection = (
  collectionName,
  documentId,
  subCollectionName,
  setFunction
) => {
  if (
    dbData[collectionName] &&
    dbData[collectionName][documentId] &&
    dbData[collectionName][documentId][subCollectionName] &&
    dbData[collectionName][documentId][subCollectionName].length > 0
  ) {
    setFunction(dbData[collectionName][documentId][subCollectionName]);
  } else {
    getDocs(
      collection(db, `${collectionName}/${documentId}/${subCollectionName}`)
    )
      .then((querySnapshot) => {
        console.log("data read form db");

        const dataArr = [];
        querySnapshot.forEach((doc) => {
          dataArr.push({ ...doc.data(), categoryId: doc.id });
        });

        if (dbData[collectionName]) {
          if (dbData[collectionName][documentId]) {
            // console.log("3");
            dbData[collectionName][documentId] = {
              ...dbData[collectionName][documentId],
              [subCollectionName]: dataArr,
            };
          } else {
            // console.log("2");
            dbData[collectionName] = {
              ...dbData[collectionName],
              [documentId]: {
                [subCollectionName]: dataArr,
              },
            };
          }
        } else {
          // console.log("1");
          dbData[collectionName] = {
            [documentId]: {
              [subCollectionName]: dataArr,
            },
          };
        }

        setFunction(dataArr);
        console.log("db data", dbData);
      })
      .catch((err) => console.log(err));
  }
};

export default getDataFromSubCollection;
