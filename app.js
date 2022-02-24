const loadMeal = () => {
  const searchFood = document.getElementById('input-field');
  const searchText = searchFood.value;
  searchFood.value = '';
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals));
}

const displayMeal = meals => {
  // console.log(meals)
  const mealCard = document.getElementById('meal-card');
  meals.forEach(meal => {
    console.log(meal)
    const div = document.createElement('div');
    div.className = 'col';
    div.innerHTML = `
        <div class="card h-100">
             <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
              <button href="#" class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
    `
    mealCard.appendChild(div);
  })
}