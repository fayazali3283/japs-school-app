try {
  const serviceAccount = require('./serviceAccountKey.json');
  console.log('Loaded successfully:', serviceAccount.project_id);  // Should print your project ID
} catch (error) {
  console.error('Error loading JSON:', error);
}
