# Rock-Paper-Scissors Game

A simple web-based Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. The game allows users to play against a computer, track their wins, losses, and ties, and offers an auto-play feature.

## Features

- Play Against Computer: Users can play Rock-Paper-Scissors against a computer opponent.
- Score Tracking: Tracks wins, losses, and ties, storing data in the browser's local storage.
- Auto-Play: Automatically plays against the computer at specified intervals.
- Keyboard Shortcuts: Play using keyboard keys (r, p, s) for Rock, Paper, and Scissors respectively.
- Responsive Design: Works well on various screen sizes.

## Installation

To set up the project, follow these steps:

1 - Clone the Repository:
```bash
git clone https://github.com/Tousif-Lakhani/rock-paper-scissors.git
cd rock-paper-scissors
```
2 - Open `index.html` in Your Browser: You can simply open the HTML file in your favorite web browser to start playing.

## Usage
### Playing the Game

1 - Click the buttons for Rock, Paper, or Scissors to make a move:

- Rock: js-rock-button
- Paper: js-paper-button
- Scissors: js-scissors-button

2 - Alternatively, use keyboard shortcuts:

- Press r for Rock
- Press p for Paper
- Press s for Scissors
  
### Auto Play Feature
- Click the Auto Play button to enable or disable automatic gameplay against the computer. The game will automatically make moves every second.

## Gameplay

1 - Making a Move: When a move is made, the computer randomly selects its move.
2 - Determining the Winner: The game logic evaluates the result based on standard rules:
- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- If both players select the same move, it’s a tie.
3 - Updating the Score: The score is updated and displayed after each round.

## Game Logic

The game logic is implemented in the `scripts/rock-paper-sci.js` file. Key functions include:

- `playGame(playerMove)`: Determines the winner based on the player's and computer's moves. Updates scores and the display.
- `pickComputerMove()`: Randomly selects a move for the computer.
- Score Management: Uses the browser's `localStorage` to persist scores between sessions.

## Resetting Scores

To reset your scores, click the Reset Score button. This will reset wins, losses, and ties to zero and clear the saved data from local storage.

## File Structure
```bash
rock-paper-scissors/
├── index.html               # Main HTML file
├── styles/
│   └── Rock-Paper-Sci.css # CSS styles for the game
└── scripts/
    └── Rock-Paper-Sci.js  # JavaScript file for game logic

```

## Conclusion

Enjoy playing Rock-Paper-Scissors! Feel free to modify and enhance the game. Contributions and improvements are welcome.
