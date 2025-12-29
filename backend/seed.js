const admin = require('./firebaseAdmin');
const db = admin.firestore();

async function createTestUser() {
  const testUser = {
    email: "admin@school.com",
    password: "password123", // In a real app, we would hash this!
    role: "admin",
    name: "Headmaster"
  };

  try {
    await db.collection('users').doc('test-admin').set(testUser);
    console.log("✅ Test user created successfully!");
    console.log("Email: admin@school.com");
    console.log("Password: password123");
    process.exit();
  } catch (error) {
    console.error("❌ Error creating user:", error);
    process.exit(1);
  }
}

createTestUser();
