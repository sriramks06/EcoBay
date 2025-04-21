# EcoBay
EcoBay – AI-Powered Sustainability Scores for E-Commerce A Chrome extension that analyzes product descriptions using AI to detect greenwashing, assign eco-scores (0–100), and suggest sustainable alternatives. Built with React, Node.js, OpenAI, and Firebase.
// === README.md (for GitHub) ===

# EcoBay – Chrome Extension for Sustainability Scoring 🌱

EcoBay is a browser extension that shows real-time sustainability scores for products on e-commerce sites like Amazon. It uses AI to detect greenwashing and suggests eco-friendly alternatives.

## 🧩 Features
- 🔍 Product analysis via OpenAI
- ♻️ Sustainability score (0–100)
- 🚫 Greenwashing detection
- ✅ Eco-certification boosting
- 💡 Suggestions for greener alternatives
- 🧾 Community reviews (Firebase DB)

## 🛠️ Tech Stack
- **Frontend:** React (Chrome Extension via Next.js)
- **Backend:** Node.js + Express
- **AI:** OpenAI API + custom scoring logic
- **Database:** Firebase (or MongoDB alternative)

## 📦 Folder Structure
```
/ecobay
  ├── backend        # Express server, AI logic, Firebase integration
  ├── frontend       # React app for Chrome Extension
  ├── firebase       # Firebase config
  └── README.md      # You are here
```

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/ecobay.git
cd ecobay
```

### 2. Backend Setup (Node.js)
```bash
cd backend
npm install
node index.js # Starts the Express server on http://localhost:5000
```

### 3. Frontend Setup (React Extension)
```bash
cd frontend
npm install
npm run build # Compiles to /build for Chrome extension
```

### 4. Firebase Setup
- Create a Firebase project
- Replace keys in `/firebase/firebaseConfig.js`

### 5. Load Chrome Extension
- Open Chrome → Extensions → Load unpacked → Select `/frontend/build`

## 🌐 Deployment

- **Frontend:** Deploy with [Vercel](https://vercel.com)
- **Backend:** Host on [Render](https://render.com) or [Railway](https://railway.app)
- **Firebase:** Already cloud-hosted — plug in your API keys

## 📸 Screenshots *(Optional)*
- Popup form
- Sustainability score UI
- Alternatives list

## 🔮 Future Improvements
- Barcode/image scanning via OCR
- Admin panel for editing scores
- OAuth login for community reviews
- Browser detection for other sites

---

Created with 💚 by EcoBay Team
