# 🎮 Pokémon Memory Card Game

A interactive Pokémon-themed memory card game built using React and CSS, utilizing async PokéAPI data fetching. Test your memory by clicking all 12 cards without selecting the same Pokémon twice!

---

## 🚀 Features

* **Dynamic Data Fetching:** Dynamic Pokémon details and sprites fetched directly via external API calls.
* **Responsive Layout:** Dynamic CSS Grid layout built to wrap seamlessly across all screen sizes.
* **Fisher-Yates Shuffle:** Automatic card reshuffling after every single selection to keep gameplay challenging.
* **Interaction Polish:** Disabled drag capabilities (`draggable={false}`) and text selection to prevent accidental UI highlighting during fast clicks[cite: 6].
* **Earthy Theme:** Dark forest green theme optimized with high-contrast borders and hover states.

---

## 🛠️ Built With

* **React** (State Management, Hooks & Dynamic Component Rendering)[cite: 6]
* **CSS3** (CSS Grid, Flexbox, Custom Shadows & Aspect Ratio Triggers)[cite: 4]
* **JavaScript (ES6+)** (Async/Await Data Fetching & Array Destructuring Shuffles)[cite: 6]
* **PokéAPI** (External REST API for Sprite Images and Details)[cite: 6]

---

## 🎯 How to Play

1. Click any Pokémon card to gain **1 point**.
2. The grid of cards will immediately shuffle into new positions.
3. Keep clicking different Pokémon without selecting any card you've already chosen.
4. If you click a duplicate Pokémon, your current score resets to **0**, and your highest score is saved.
5. Click all **12 unique Pokémon** to clear the deck and win!

---

## 📦 Setup & Local Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/pokemon-memory-card.git](https://github.com/your-username/pokemon-memory-card.git)
   cd pokemon-memory-card
