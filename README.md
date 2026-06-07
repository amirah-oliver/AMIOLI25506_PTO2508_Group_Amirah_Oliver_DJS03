# 🎙️ Podcast Discovery App

## 📌 Overview

This project is a React-based podcast discovery application that fetches podcast data from an external API and displays podcast previews in a responsive grid layout.

Users can browse podcasts and view information such as the podcast image, title, number of seasons, genres, and the last updated date.

---

## 🚀 Features

- Fetches podcast data from an API on page load
- Displays a loading message while data is being fetched
- Handles API errors gracefully
- Shows a message when no podcasts are available
- Responsive layout for desktop, tablet, and mobile devices
- Reusable React components
- Human-readable date formatting
- Genre tags displayed for each podcast

---

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- CSS
- Fetch API
- React Hooks (`useState`, `useEffect`)

---

## 📂 Project Structure

```text
src/
│
├── components/
│   └── PodcastCard.jsx
│
├── data/
│   └── data.js
│
├── utils/
│   └── formatDate.js
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---

## ▶️ Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd podcast-discovery-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the local development URL shown in the terminal.

---

## 🌐 API

Podcast data is fetched from:

https://podcast-api.netlify.app/

Genre information is stored locally in `data.js`.

---

## 📱 Responsive Design

The application is designed to work on:

- Desktop (1200px and above)
- Tablet (around 768px)
- Mobile (around 375px)

CSS Grid is used to create a responsive layout that adapts to different screen sizes.

---

## 📄 Component Description

### PodcastCard

A reusable component that displays:

- Podcast image
- Podcast title
- Number of seasons
- Genre tags
- Last updated date

Props:

```jsx
<PodcastCard podcast={podcast} />
```

---

## 👨‍💻 Author

Created by Amirah Oliver for the React Podcast Landing Page project.