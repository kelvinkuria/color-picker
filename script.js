// Generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Function to reset the game
  function resetGame() {
    const colorOptionsContainer = document.querySelector('.color-options');
    colorOptionsContainer.innerHTML = ''; // Clear existing options
  
    // Generate a random target color
    const targetColor = getRandomColor();
    document.getElementById('rgb-value').innerText = targetColor;
  
    // Generate random colors for the boxes (including the correct one)
    const totalBoxes = 6; // Change this to increase or decrease difficulty
    const correctIndex = Math.floor(Math.random() * totalBoxes);
  
    for (let i = 0; i < totalBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('color-box');
  
      // Assign the correct color to one box, random colors to others
      const color = i === correctIndex ? targetColor : getRandomColor();
      colorBox.style.backgroundColor = color;
  
      // Add event listener for player's choice
      colorBox.addEventListener('click', () => {
        if (color === targetColor) {
          document.getElementById('message').innerText = '🎉 Correct!';
          updateScore(1);
          highlightCorrectBox(targetColor);
        } else {
          document.getElementById('message').innerText = '❌ Try Again!';
          colorBox.style.opacity = '0.5';
        }
      });
  
      colorOptionsContainer.appendChild(colorBox);
    }
  
    // Clear the message area
    document.getElementById('message').innerText = '';
  }
  
  // Function to update the score
  function updateScore(points) {
    const scoreElement = document.getElementById('score');
    let currentScore = parseInt(scoreElement.innerText.split(': ')[1]);
    scoreElement.innerText = `Score: ${currentScore + points}`;
  }
  
  // Highlight the correct box after a correct guess
  function highlightCorrectBox(correctColor) {
    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach((box) => {
      if (box.style.backgroundColor === correctColor) {
        box.style.border = '3px solid green';
      } else {
        box.style.opacity = '0.5';
      }
    });
  }
  
  // Initialize the game
  function initializeGame() {
    // Set initial score to 0
    document.getElementById('score').innerText = 'Score: 0';
  
    // Add event listener to reset button
    document.getElementById('reset-button').addEventListener('click', resetGame);
  
    // Start the first round
    resetGame();
  }
  
  // Start the game when the script loads
  initializeGame();
  