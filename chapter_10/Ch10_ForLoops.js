const foods = ["apple", "banana", "chocolate"];
const dishes = ["plate", "knife"];
function cookAndEatFoods() {
  for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    cook(food);
    eat(food);
  }
}

function cleanDishes() {
  for (let i = 0; i < dishes.length; i++) {
    const dish = dishes[i];
    wash(dish);
    dry(dish);
    putAway(dish);
  }
}

cookAndEatFoods();
cleanDishes();