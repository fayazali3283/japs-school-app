const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin'); // 1. Added this
const app = express();

// 2. Initialize Firebase (Make sure your JSON key is in the backend folder!)
const serviceAccount = require('./serviceAccountKey.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get('/', (req, res) => {
    res.send("Server is alive and Firebase is connected!");
});

// GET PROFILE FROM FIRESTORE
app.get('/profile', async (req, res) => {
    try {
        // You can later pull this from a 'settings' collection in Firebase
        res.json({
            name: "Admin User",
            role: "School Principal",
            school: "Future Academy"
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// NEW: GET ALL STUDENTS FROM FIREBASE
app.get('/students', async (req, res) => {
    try {
        const snapshot = await db.collection('students').get();
        const students = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/login', (req, res) => {
    const { email, password } = req.body; 
    if (email === "admin@school.com" && password === "password123") {
        res.json({ message: "Success", token: "12345" });
    } else {
        res.status(401).json({ error: "Fail" });
    }
});

app.listen(5000, () => {
    console.log(" Server spinning on port 5000 with Firebase Admin");
});

