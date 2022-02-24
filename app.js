
const loadMeal = () => {
  const searchFood = document.getElementById('input-field');
  const searchText = searchFood.value;
  searchFood.value = '';
  if (searchText == '') {
    alert();
  } else if (isNaN(searchText)) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
      .then(res => res.json())
      .then(data => displayMeal(data.meals));
  } else {
    alert()
  }

}

  const displayMeal = meals => {
    // console.log(meals)
    const mealCard = document.getElementById('meal-card');
    mealCard.textContent = '';
    meals.forEach(meal => {
      console.log(meal)
      const div = document.createElement('div');
      div.className = 'col';
      div.innerHTML = `
        <div class="card h-100">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
              <button onclick="loadDetail('${meal.idMeal}')" href="#" class="btn btn-primary">See Detail</button>
          </div>
        </div>
    `;
      mealCard.appendChild(div);
    })
  }

  const loadDetail = details => {
    // console.log(details)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`
    // console.log(url)
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data.meals[0]))
  }