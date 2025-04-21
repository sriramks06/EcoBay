// === EcoBay Firebase Configuration & Integration ===

const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, getDocs } = require("firebase/firestore");

// Replace with your Firebase project's config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// === Store Product Analysis Results ===
async function saveProductAnalysis(product, score, alternatives) {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      name: product.name,
      description: product.description,
      certifications: product.certifications,
      score,
      alternatives,
      timestamp: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// === Fetch All Analyzed Products (for admin UI or history) ===
async function getAllAnalyzedProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

module.exports = {
  saveProductAnalysis,
  getAllAnalyzedProducts
};
