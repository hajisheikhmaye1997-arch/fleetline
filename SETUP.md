# Fleetline — Owner + Driver setup guide

This package now has TWO apps that share one live database:
- `index.html` — your owner/manager dashboard
- `driver.html` — the simple app each driver logs trips into

Trips a driver submits appear in your dashboard automatically (Trips tab + Finance numbers).

---

## 1. Create your Firebase project (~5 min, free)

1. Go to https://console.firebase.google.com → **Add project** → name it (e.g. "fleetline") → create.
2. **Build → Authentication → Get started → Sign-in method → Email/Password → Enable.**
3. **Build → Firestore Database → Create database → Production mode** → pick the region closest to you.
4. **Build → Storage → Get started** (keep default settings). This stores driver trip photos.
5. Click the gear icon → **Project settings → General → Your apps → Add app → Web (`</>`)**.
   Give it any nickname, skip hosting setup, click **Register app**.
   You'll see a `firebaseConfig` object — copy it.

## 2. Add your config

Open `firebase-init.js` in this folder and replace the placeholder `firebaseConfig` values with the ones you just copied. Save the file — both `index.html` and `driver.html` read from it.

## 3. Set the security rules

1. In Firebase console → **Firestore Database → Rules** tab → replace everything with the contents of `firestore.rules` in this folder → **Publish**.
2. In Firebase console → **Storage → Rules** tab → replace everything with the contents of `storage.rules` → **Publish**.

## 4. Create your owner account

1. **Authentication → Users → Add user** → enter your own email + a password.
2. Copy the **User UID** it generates.
3. **Firestore Database → Start collection** → collection ID: `users` → Document ID: paste the UID you copied → add fields:
   - `role` (string) = `owner`
   - `name` (string) = your name
4. Save.

## 5. Create a driver account (repeat per driver)

1. **Authentication → Users → Add user** → the driver's email + a password (share this with them, or have them reset it on first login).
2. Copy their **User UID**.
3. **Firestore Database → users collection → Add document** → Document ID: paste their UID → fields:
   - `role` (string) = `driver`
   - `name` (string) = driver's name (should match a name in the sample data, or add a matching entry in `drivers`)
   - `truckPlate` (string) = the plate they drive, e.g. `KDA 123X`

## 6. Seed sample fleet data (optional, one-time)

Open `seed.html` in a browser after deploying (see step 7), sign in with your **owner** email/password, and click the button. This pre-fills sample trucks, drivers, and finance numbers so the dashboard isn't empty. You can edit/replace this data directly in the Firestore console any time.

## 7. Deploy (so it's a real https app)

Easiest option — Netlify Drop, no signup:
1. Go to **app.netlify.com/drop**
2. Drag this whole folder onto the page
3. You'll get a live link like `https://random-name.netlify.app`

Your dashboard is at that link (`/index.html` or just `/`), the driver app is at `/driver.html`, and the seeder is at `/seed.html`.

## 8. Install as apps

- **Owner:** open the link on your phone/desktop → browser menu → "Install app" / "Add to Home Screen" → sign in with your owner account.
- **Driver:** send each driver the link + `/driver.html` → same install step → they sign in with their own driver account.

---

### Notes
- Maintenance, loan payments, base salary, and "other" costs are entered by you (via Firestore console, or ask me to build an edit screen next) — they aren't submitted by drivers.
- Fuel cost, income, and driver allowance in Finance are calculated automatically from the trips drivers log.
- Trip photos (proof of delivery / fuel receipts) upload to Storage and show as a "View" link in the owner's Trips table.
- Want an in-app screen (instead of the Firebase console) for editing trucks, drivers, or monthly costs? That's a natural next step — just ask.
