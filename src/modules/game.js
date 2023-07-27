const isgameId = () => localStorage.getItem('gameId');

const createGame = async () => {
  if (!isgameId()) {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Heroes Game',
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

      .then(async (response) => {
        const data = await response.json();
        const arr = data.result.split(' ');
        localStorage.setItem('gameId', arr[3]);
      })
      .catch((Error) => {
        throw new Error('Something went wrong!');
      });
  }
};

export default createGame;