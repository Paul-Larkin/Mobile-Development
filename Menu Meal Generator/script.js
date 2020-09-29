let starters = [
  {"name":"Chicken Wings", price: 7.99},
  {"name":"Soup of the day", price: 4.99},
  {"name":"Cesar Salad", price: 6.55}
];

let mains = [
  {"name":"Sirlion Steak", price: 15.99},
  {"name":"Chicken Curry", price: 13.99},
  {"name":"Cottage Pie", price: 14.99}
];

let desserts = [
  {"name":"Apple Pie", price: 7.99},
  {"name":"Chocolate Cake", price: 8.99},
  {"name":"Cheese Cake", price: 5.99}
];

function generateMeal(course, element) {
  let random = Math.floor(Math.random() * Math.floor(course.length));
  document.getElementById(element).innerHTML = course[random].name + " €" + course[random].price;
}

function reset() {
  document.getElementById("starter").innerHTML = "None";
  document.getElementById("main").innerHTML = "None";
  document.getElementById("dessert").innerHTML = "None";
}