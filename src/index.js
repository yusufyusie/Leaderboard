import './assets/style.css';
import API from  './modules/api.js';

 const nameElement = document.getElementById('your-name');
 const scoreElement = document.getElementById('your-score');
 const btnRefresh = document.querySelector('.btn-refresh');
 const btnSubmit = document.querySelector('.btn-submit-score');
 const leadersList = document.querySelector('.leader-view-list');
 const api = new API();

   btnRefresh.addEventListener('click', async () => {
    displayLeaders();
  });

const displayLeaders = async () => {
    const scoresArray = await api.getScores();
    let scoresData = '';
    const sortedScores = scoresArray.result.sort((a, b) => b.score - a.score);
    sortedScores.forEach((item) => {
      scoresData += `<li>${item.user}: ${item.score}</li>`;
    });
    leadersList.innerHTML = scoresData;
  };
  
  btnSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    const playerName = nameElement.value;
    const playerScore = scoreElement.value;
    await api.addLeader(playerName, playerScore);
    nameElement.value = '';
    scoreElement.value = '';
  });

  document.addEventListener('DOMContentLoaded', displayLeaders);