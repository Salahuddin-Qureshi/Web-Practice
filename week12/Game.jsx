import React, { useState } from 'react';
import './Game.css'

// import React, { useState } from 'react';

function Game() {
  const [rows, setRows] = useState(0);
  const [currentSteps, setCurrentSteps] = useState([]);
  const [canAddUser, setCanAddUser] = useState(true);
  const [completedUsers, setCompletedUsers] = useState(0);

  const handleAddUser = () => {
    if (canAddUser) {
      setRows(rows + 1);
      setCurrentSteps([...currentSteps, 1]);
      setCanAddUser(false);
    }
  };

  const handleNext = (index) => {
    if (currentSteps[index] < 3) {
      const previousUserCompleted = index > 0 && currentSteps[index - 1] === 3;
      if (!index || previousUserCompleted) {
        setCurrentSteps(
          currentSteps.map((step, i) =>
            i === index ? step + 1 : step
          )
        );
      }
    }
    if (currentSteps[index] === 3) {
      setCompletedUsers(completedUsers + 1);
      if (completedUsers === rows) {
        setCanAddUser(true);
        setCurrentSteps(Array(rows).fill(1));
      }
    }
  };

  return (
    <div className="game-container">
      <button
        id="addUser"
        onClick={handleAddUser}
        disabled={!canAddUser}
        className="add-user-button"
      >
        Add User
      </button>
      {Array(rows)
        .fill(null)
        .map((_, rowIndex) => (
          <div key={rowIndex} className="button-row">
            <button
              className={`${currentSteps[rowIndex] >= 1 ? 'filled' : ''} step-button`}
              disabled={currentSteps[rowIndex] < 1}
            >
              Step 1
            </button>
            <button
              className={`${currentSteps[rowIndex] >= 2 ? 'filled' : ''} step-button`}
              disabled={currentSteps[rowIndex] < 2}
            >
              Step 2
            </button>
            <button
              className={`${currentSteps[rowIndex] >= 3 ? 'filled' : ''} step-button`}
              disabled={currentSteps[rowIndex] < 3}
            >
              Step 3
            </button>
            <button
              onClick={() => handleNext(rowIndex)}
              className="next-button"
            >
              Next
            </button>
          </div>
        ))}
    </div>
  );
}export default Game