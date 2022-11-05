const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');

for (const obj of ingredients) {
  const navItemEl = document.createElement('li');
  navItemEl.textContent = obj;
  navItemEl.classList.add('item');
  ingredientsEl.append(navItemEl);
};