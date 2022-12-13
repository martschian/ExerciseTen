const fetchBiometrics = function (el) {
  const output = document.querySelector('textarea');
  const searchTerm = el[0].value;
  const uri = 'https://www.swapi.tech/api/people/?name=' + searchTerm;
  output.textContent = `Du sökte efter \"${searchTerm}\"`;

  fetch(uri)
    .then((res) => res.json())
    .then((data) => {
      if (data.result.length) {
        data.result.forEach((element) => {
          const { name, mass, height, gender, hair_color } = element.properties;
          const text = `\n\nInfo om ${name}\n\nVikt: ${mass}, längd: ${height}, kön: ${gender}, hårfärg: ${hair_color}`;
          output.textContent += text;
        });
      } else {
        output.textContent += `\n\nInga resultat.`;
      }
    })
    .catch((err) => console.log(err));
};

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  fetchBiometrics(e.target);
  e.target.reset();
});
