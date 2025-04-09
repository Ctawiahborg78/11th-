const celebrationContainer = document.getElementById('celebration-container');

function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  
  confetti.style.left = Math.random() * 100 + 'vw';
  
  confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
  
  celebrationContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
}

setInterval(createConfettiPiece, 300);

const style = document.createElement('style');
style.innerHTML = `
  #celebration-container {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 9999;
  }
  .confetti {
    position: absolute;
    width: 10px; 
    height: 10px;
    background: #f06292; /* pink color; change as you like */
    opacity: 0.7;
    animation: confetti-fall linear forwards;
  }
  @keyframes confetti-fall {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100vh);
    }
  }
`;
document.head.appendChild(style);

function updateAnniversaryTimer() {
    const startDate = new Date("2024-05-09T00:00:00");
    const now = new Date();
    let diff = now - startDate;
  
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44); 
    const years = Math.floor(months / 12);
  
    const remainingMonths = months % 12;
    const remainingDays = days % 30.44;
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;
  
    const timerText = `${years} year(s), ${remainingMonths} month(s), ${Math.floor(remainingDays)} day(s), `
      + `${remainingHours} hour(s), ${remainingMinutes} minute(s), ${remainingSeconds} second(s)`;
  
    const timerEl = document.getElementById("anniversary-timer");
    if (timerEl) timerEl.textContent = timerText;
  }
  
  setInterval(updateAnniversaryTimer, 1000);
  