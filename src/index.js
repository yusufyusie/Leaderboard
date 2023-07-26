import './assets/style.css';
import './modules/payer.js';
import {
    nameElement,
    scoreElement,
    btnRefresh,
    btnSubmit,
    leadersList,
  } from '../modules/domElement.js';

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
    await api.addScore(playerName, playerScore);
    nameElement.value = '';
    scoreElement.value = '';
  });