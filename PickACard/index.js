const fetchCard = function (el) {
  const output = document.querySelector('div');
  output.innerHTML = '';
  const uri = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

  fetch(uri)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const img = document.createElement('img');
      img.setAttribute('src', data.cards[0].image);
      output.appendChild(img);
    })
    .catch((err) => console.log(err));
};

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();
  fetchCard(e);
});
