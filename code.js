let findForm = document.querySelector('form');
let container = document.querySelector('.container')
let findResult = document.querySelector('.search-result');
let user = document.getElementById('input').value;
let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`
let userBtn = document.getElementById('btn')
let object = document.getElementById('object');

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
                    <a class="view-button" href="#">Get Recipe</a>
                </div>
                <p class="object-data">${meal.idMeal}</p>
                <p class="object-data">${meal.strInstructions}</p>
            </div>
            `
        })
        findResult.innerHTML = html;
        }
    })
           
         })
            
    

 



 
    
 