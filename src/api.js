import { API_URL } from './config';

// получаю информацию о блюде по его id
const getMealById = async (mealId) => {
  const response = await fetch(API_URL + 'lookup.php?i=' + mealId);

  return await response.json();
};

// получаю все категории
const getAllCategories = async () => {
  const response = await fetch(API_URL + 'categories.php');

  return await response.json();
};

// поиск по категории
const getFilteredCategory = async (catName) => {
  const response = await fetch(API_URL + 'filter.php?c=' + catName);

  return await response.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
