import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, onSnapshot, query } from 'firebase/firestore';

const Students = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "students"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setStudents(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "students"), { name, grade, createdAt: new Date() });
    setName(''); setGrade('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Directory</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input value={name} placeholder="Student Name" onChange={e => setName(e.target.value)} required />
        <input value={grade} placeholder="Grade/Class" onChange={e => setGrade(e.target.value)} required />
        <button type="submit">Register Student</button>
      </form>
      <ul>
        {students.map(s => <li key={s.id}>{s.name} - {s.grade}</li>)}
      </ul>
    </div>
  );
};

export default Students;
