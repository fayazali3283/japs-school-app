import React, { useState } from 'react';
import { db, auth } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Teachers = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');

  const addTeacher = async (e) => {
    e.preventDefault();
    try {
      // In your SaaS plan, we use the schoolId to separate data
      await addDoc(collection(db, "teachers"), {
        name,
        subject,
        schoolId: "city_school_001", // We will make this dynamic later
        addedBy: auth.currentUser.email,
        createdAt: new Date()
      });
      alert("Teacher added to your School database!");
      setName(''); setSubject('');
    } catch (err) { alert(err.message); }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Add New Teacher</h3>
      <form onSubmit={addTeacher} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input value={name} placeholder="Teacher Name" onChange={e => setName(e.target.value)} required />
        <input value={subject} placeholder="Subject" onChange={e => setSubject(e.target.value)} required />
        <button type="submit">Save Teacher</button>
      </form>
    </div>
  );
};

export default Teachers;
