// placeholder for all javascript code

const API_URL = 'https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json';
const cardContainer = document.getElementById('card-container');
const fetchAllBtn = document.getElementById('fetch-all');
const fetchFilteredBtn = document.getElementById('fetch-filtered');
const clearBtn = document.getElementById('clear-cards');

function createUserCard(user) 
{
  const card = document.createElement('div');
  card.className = 'user-card';
  card.innerHTML = `
    <h3>${user.firstName} ${user.lastName}</h3>
    <p>Company: ${user.companyName}</p>
    <p>Years Employed: ${user.yearsEmployed}</p>
  `;
  return card;
}

function renderCards(users) 
{
  cardContainer.innerHTML = '';
  users.forEach(user => {
    cardContainer.appendChild(createUserCard(user));
  });
}

fetchAllBtn.addEventListener('click', async () => 
{
  const res = await fetch(API_URL);
  const users = await res.json();
  renderCards(users);
});

fetchFilteredBtn.addEventListener('click', async () =>
{
  const res = await fetch(API_URL);
  const users = await res.json();
  const filtered = users.filter(u => u.yearsEmployed > 10);
  renderCards(filtered);
});

clearBtn.addEventListener('click', () => 
{
  cardContainer.innerHTML = '';
});
