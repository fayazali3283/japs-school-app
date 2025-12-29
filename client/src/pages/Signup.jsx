import React, { useState } from 'react';
import { auth, db } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '', password: '', role: 'Admin', schoolId: ''
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: formData.role,
        schoolId: formData.schoolId,
        createdAt: new Date()
      });
      alert("SaaS Account Created Successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>School SaaS Signup</h2>
      <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
        <input type="text" placeholder="School ID" onChange={(e) => setFormData({...formData, schoolId: e.target.value})} required />
        <select onChange={(e) => setFormData({...formData, role: e.target.value})}>
          <option value="Admin">Admin</option>
          <option value="Principal">Principal</option>
          <option value="Clerk">Clerk</option>
        </select>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Register School</button>
      </form>
    </div>
  );
};

export default Signup;
