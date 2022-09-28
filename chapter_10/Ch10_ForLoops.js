const foods = ["apple", "banana", "chocolate"];
const dishes = ["plate", "knife"];

// ForEach Function
function forEach(array, f) {
  for (let i = 0; i < array.length; i++) {
    f(array[i]);
  }
}

// Business Functions
function cookAndEat(food) {
  cook(food);
  eat(food);
}

function clean(dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
}

forEach(foods, cookAndEat);
forEach(dishes, clean);