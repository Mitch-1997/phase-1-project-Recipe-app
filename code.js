let findForm = document.querySelector('form');
let container = document.querySelector('.container')
let findResult = document.querySelector('.search-result');
let user = document.getElementById('input').value;
let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`
let userBtn = document.getElementById('btn')
let object = document.getElementById('object');


// findResult.addEventListener('click', getMeal);
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
                    <h1 id="sub-title"> Instructions:</h1>
                    <h1 class="sub-title"> ${meal.strInstructions} </h1>
                    <a class="view-button" href=${meal.strInstructions} target="_blank">Get Recipe</a>
                </div>
                <p class="object-data"></p>
            </div>
            `
        })
        findResult.innerHTML = html;
        let getRecipe = document.querySelector('.view-button')
        getRecipe.addEventListener('click', () => {
            let popButton = document.getElementById('popup-btn');
            popButton.addEventListener('click', () => {
                
            })
        })
        }
    })
           
         })
            // function getMeal(e){
            //     e.preventDefault();
            //     if(e.target.classList.contains('view-button')){
            //         let mealItem = e.target.parentElement;
            //         console.log(mealItem);
            //     }
            // }
    

 



 
    
 