//<script src="app.js"></script>


function openHoursData()
{
  const section = document.getElementById('rightSection');
  section.innerHTML='';
  const openHours1 = document.createElement('li');
  section.appendChild(openHours1);
  openHours1.textContent = 'Seatle : Open at 6am Closes at 7pm';
  const openHours2 = document.createElement('li');
  section.appendChild(openHours2);
  openHours2.textContent = 'Tokyo : Open at 6am Closes at 7pm';
  const openHours3 = document.createElement('li');
  section.appendChild(openHours3);
  openHours3.textContent = 'Paris : Open at 6am Closes at 7pm';
  const openHours4 = document.createElement('li');
  section.appendChild(openHours4);
  openHours4.textContent = 'Dubai : Open at 6am Closes at 7pm';
  const openHours5 = document.createElement('li');
  section.appendChild(openHours5);
  openHours5.textContent = 'Lima : Open at 6am Closes at 7pm';
}


function address()
{
  const section = document.getElementById('rightSection');
  section.innerHTML='';
  const openHours1 = document.createElement('li');
  section.appendChild(openHours1);
  openHours1.textContent = 'Seatle :  92 Stewart St, Seattle, WA 98101, United States';
  const openHours2 = document.createElement('li');
  section.appendChild(openHours2);
  openHours2.textContent = 'Tokyo : Udagawacho, Shibuya City, Tokyo 150-0042, Japan';
  const openHours3 = document.createElement('li');
  section.appendChild(openHours3);
  openHours3.textContent = 'Paris :  24 Rue de Sèvres, 75007 Paris, France';
  const openHours4 = document.createElement('li');
  section.appendChild(openHours4);
  openHours4.textContent = 'Dubai : Al Rebat Road, Dubai Festival City - Dubai - United Arab Emirates';
  const openHours5 = document.createElement('li');
  section.appendChild(openHours5);
  openHours5.textContent = 'Lima : 515 W Elm St, Lima, OH 45801, United States';
}


function home()
{
  const section = document.getElementById('rightSection');
  section.innerHTML='';
  const home = document.createElement('h1');
  section.appendChild(home);
  home.textContent = 'Welcome to Pat\'s Salmon cookies';
}