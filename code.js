let findForm = document.querySelector('form');
let container = document.querySelector('.container')
let findResult = document.querySelector('.search-result');
let user = document.getElementById('input').value;
let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`
let userBtn = document.getElementById('btn')
let object = document.getElementById('object');


 findResult.addEventListener('click', getMealRecipe);
userBtn.addEventListener('click', () => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        let html = "";
        if(data.meals){
        data.meals.forEach(meal => {
            html +=`
            <div class="object">
                <img src=${meal.strMealThumb} alt="">
                <div class="item-container">
                    <h1 class="sub-title"> ${meal.strMeal}</h1>
                    <h1 class="sub-title" id="idmeal"> ${meal.idMeal}</h1>
                <button class="view-button" id=${meal.idMeal}>Get Recipe</button>
                
                </div>
                <p class="object-data">${meal.strInstructions}</p>
            </div>
            `
            document.addEventListener('DOMContentLoaded', () => {
                document.querySelector('.view-button').addEventListener('click', () => {
                    let paragraph = document.querySelector('.object-data');
                    paragraph.style.display = 'none';
    
                })

            })
            
        })
        findResult.innerHTML = html;
        // let getRecipe = document.querySelector('.view-button')
        // getRecipe.addEventListener('click', () => {
        
    }  
            })
        })
    
         
        
            function getMealRecipe(e){
               e.preventDefault();
                 if(e.target.classList.contains('view-button')){
                    console.log(e.target);
                    let id = e.target.getAttribute('id');
                    
                
                    console.log(id);
                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                    .then(response => response.json())
                .then(data =>{ 
                    console.log('data', data);
                   

                    mealRecipeModal(data.meals) 
                })
                    .catch(error => console.log('error', error));
                
               }
            }
        function mealRecipeModal(meal){
            console.log(meal);
            meal = meal[0];
            let html = 
            `
            <h2 class="recipe-title">$(meal.strMeal)</h2>
                <p class="meal-category">${meal.strCategory}</p>
                <div clas="meal-instruction">
                    <h3>Instructions:</h3>
                    <p>${meal.strInstructions}</p>
                    <img src=${meal.strMealThumb} alt="">
                    <button class="view-button" id=${meal.strInstructions}>Get Recipe</a>
                    <div id="view-recipe">hddh</div>
                 </div>
            
            `;
            //mealDetailsContent.innerHTML = html;
            // mealDetailsContent.getAttribute.classList.addEventListener
            // ('showRecipe');
        }
    





 
    
 