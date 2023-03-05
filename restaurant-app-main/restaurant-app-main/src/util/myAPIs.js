import {db} from '../firebase'
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore'

export const getData = async(collectionName, setter) => {
    const snapshot = await getDocs(collection(db, collectionName))
    const elements = snapshot.docs.map(element => element)
    console.log(elements)
    setter(elements)
} 

export const postData = async(collectionName, obj, setter) => {
    await addDoc(collection(db, collectionName), obj)
    setter && getData(collection, setter)
}

export const putData = async(collectionName, idObj, obj, setter) => {
    await updateDoc(doc(db, collectionName, idObj), obj)
    setter && getData(collection, setter)
}

export const deleteData = async(collectionName, idObj, setter) => {
    await deleteDoc(doc(db, collectionName, idObj))
    setter && getData(collection, setter)
}