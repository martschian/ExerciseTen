const fetchBiometrics = function (el) {
  const output = document.querySelector('textarea');
  const uri = 'https://www.swapi.tech/api/people/?name=' + el[0].value;

  fetch(uri)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { mass, height, gender, hair_color } = data.result[0].properties;
      const text = `Vikt: ${mass}, längd: ${height}, kön: ${gender}, hårfärg: ${hair_color}`;
      output.textContent = text;
    })
    .catch((err) => console.log(err));
};

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  fetchBiometrics(e.target);
  e.target.reset();
});
