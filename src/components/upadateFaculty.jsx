import React, { useState } from 'react'
import { addDoc, collection, getFirestore} from 'firebase/firestore'
import { app } from '../firebase'

const UpdateFaculty = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault();
        const db= getFirestore(app)
        const docRef = await addDoc(collection(db, 'faculty'), {
            facultyName: name,
            phone: phone
        })
    }
  return (
    <div>
        <h1>update faculty</h1>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='full name' />
        <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder='phone number' />
        <button type="submit" >update</button>
      </form>
    </div>
  )
}

export default UpdateFaculty
