import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import _ from "lodash";

const useGetData = path => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const getCollection = await collection(db, path);
            onSnapshot(getCollection, snap => {
                if(!_.isEmpty(snap.docs)) {
                    let data = [];
                    snap.forEach((doc, idx) => {
                        data.push({ ...doc.data(), uid: doc.id });
                    })
                    setData(data);
                }
            })

            return () => getCollection();
        })()
    }, [])

    return data;
}

export default useGetData;
