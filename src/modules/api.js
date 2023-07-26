const successMessage = document.getElementById('success-message-id');
class API {
    constructor() {
      this.gameId = 'Zl4d7IVkemOTTVg2fUdz';
      this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    }

     addLeader = async (user, score) => {
    const response = { score, user }; await fetch(`${this.url + this.gameId}/scores`, {
      method: 'POST',
      body: JSON.stringify(response),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        const scoreResponse = await response.json();
        successMessage.textContent = scoreResponse.result;
      })
      .catch((error) => {
        successMessage.textContent = 'Fail. Please try again.';
        throw error('Something is wrong');
      });
  };

  getScores = async () => {
    const response = await fetch(`${this.url + this.gameId}/scores`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const scoreData = await response.json();
    return scoreData;
  };
}


export default API;