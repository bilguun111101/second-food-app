import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import _ from "lodash";

const useGetData = path => {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const getCollections = await collection(db, path);
      onSnapshot(getCollections, (snap) => {
        if(!_.isEmpty(snap.docs)) {
          let data = [];
          snap.forEach(doc => {
            data.push({ ...doc.data(), uid: doc.id });
          })
          setData(data);
        }
      })

      return () => getCollections();
    })()
  }, [])

  return data;
}

export default useGetData;