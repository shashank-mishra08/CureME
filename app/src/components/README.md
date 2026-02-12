# 📱 How to Run & Preview "CureNow"

**Date:** 2026-02-12
**Project:** CureNow (Hyper-Local Health Ecosystem)

---

## 🚀 1. Prerequisites (Pehle ye install karein)
Apne computer par ye cheezein honi chahiye:
1.  **Node.js**: [Download here](https://nodejs.org/) (LTS version).
2.  **Expo Go App**: Apne Phone (Android/iOS) par "Expo Go" install karein Play Store/App Store se.

---

## 🏃‍♂️ 2. Run the App (App kaise chalayein)

Terminal kholer aur ye commands likhein:

```bash
# 1. Project folder mein jayein
cd /Users/shashank/CureNow/app

# 2. Dependencies install karein (agar nahi ki hain)
npm install

# 3. App start karein
npx expo start
```

### 📱 3. Phone Par Dekhein
Jab aap `npx expo start` command chalayenge, to ek **QR Code** dikhega terminal mein.

1.  Apne phone par **Expo Go** app kholein.
2.  **Android**: "Scan QR Code" dabayein aur scan karein.
3.  **iOS**: Camera app se QR code scan karein.
4.  **Magic!** 🪄 App aapke phone par load ho jayegi.

---

## 📁 Project Documentation (Saare Plans Yahan Hain)
Maine saare documents ko `docs/` folder mein organize kar diya hai:

- **[VISION.md](./VISION.md)**: Project ka poora idea aur features.
- **[DESIGN.md](./DESIGN.md)**: User Interface (UI) kaisa dikhega.
- **[DATABASE.md](./DATABASE.md)**: Data structure (Firestore).
- **[ROADMAP.md](./ROADMAP.md)**: Step-by-step plan.
- **[TECH_STACK.md](./TECH_STACK.md)**: AI Logic aur technical details.

---

## 🎙️ Speech-to-Text (Cost Saving Strategy)
**Budget Goal:** Under ₹5000

Hum **2 Options** use kar sakte hain bina heavy cost ke:

1.  **Option A (Free - Recommended for MVP)**:
    - User apne keyboard ka **Mic Button** dabayega.
    - Phone ka inbuilt system bolne ko text mein badal dega.
    - Cost: **₹0** (Zero).

2.  **Option B (Cheap & Automatic)**:
    - Hum audio record karke **OpenAI Whisper API** ko bhejenge.
    - Cost: **$0.006 per minute** (approx ₹0.50 per min).
    - ₹5000 mein aap **10,000 minutes** (166 hours) ki recording process kar sakte hain. Ye bahut sasta hai!
    - **Note**: Iske liye backend (Cloud Function) lagega.

**Mera Suggestion**: Pehle **Option A** (Keyboard Mic) se start karte hain. Bilkul free aur aasaan.
