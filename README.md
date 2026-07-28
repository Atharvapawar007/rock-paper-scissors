# Rock Paper Scissors

A browser-based **Rock Paper Scissors** game built using **HTML**, **CSS**, and **Vanilla JavaScript** as part of **The Odin Project** curriculum.

The player competes against the computer by selecting one of the three available choices. The first player to reach **5 points** wins the match.

---

## Features

- Interactive Rock, Paper, Scissors gameplay.
- Random computer choice generation.
- Live display of player and computer choices.
- Real-time score tracking.
- Automatic winner announcement.
- Game automatically resets after a player reaches 5 points.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## Project Structure

```
Rock-Paper-Scissors/
│
├── index.html
├── script.js
└── README.md
```

---

## How It Works

### 1. Player Selection

The player chooses one of the three available options:

- Rock
- Paper
- Scissors

Each choice is represented by its own button.

---

### 2. Computer Selection

The computer randomly generates one of the following choices:

- Rock
- Paper
- Scissors

Each option has an equal chance of being selected.

---

### 3. Round Evaluation

After both choices are made, the game determines the winner according to the standard rules:

- Rock defeats Scissors
- Paper defeats Rock
- Scissors defeats Paper

If both choices are identical, the round ends in a draw and no points are awarded.

---

### 4. Score Tracking

The application keeps track of:

- Human Score
- Computer Score

The scoreboard updates immediately after every round.

---

### 5. Match Winner

The game continues until either the player or the computer reaches **5 points**.

Once a winner is determined:

- A winner message is displayed.
- Scores reset to **0**.
- Previous choices are cleared.
- A new match can begin immediately.

---

## Current Functionality

- Random computer moves
- Player interaction using buttons
- Score tracking
- Winner detection
- Automatic game reset
- Live choice display

---

## Future Improvements

- Improved user interface and animations
- Keyboard controls
- Sound effects
- Best-of-three mode
- Adjustable winning score
- Game history
- Statistics tracking
- Dark mode
- Responsive mobile layout
- Multiplayer mode
- Local Storage support for high scores

---

## Learning Outcomes

This project helped reinforce concepts such as:

- JavaScript Functions
- Conditional Logic
- Switch Statements
- Variables
- Event Listeners
- DOM Manipulation
- Random Number Generation
- Template Literals
- Dynamic UI Updates
- Basic Game Logic
- State Management

---

## Acknowledgements

This project was built as part of **The Odin Project** Foundations curriculum.

https://www.theodinproject.com/