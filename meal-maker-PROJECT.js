const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

  set appetizers(appetizersIn) {
    this._courses.appetizers = appetizersIn;
  },
  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },
  set desserts(dessertsIn) {
    this._courses.mains = dessertsIn;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse(`appetizers`);
    const main = this.getRandomDishFromCourse(`mains`);
    const dessert = this.getRandomDishFromCourse(`desserts`);
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
  },
};
//can change accordingly
menu.addDishToCourse(`appetizers`, `salad`, 4.0);
menu.addDishToCourse(`appetizers`, `wings`, 4.5);
menu.addDishToCourse(`appetizers`, `fries`, 5.0);

menu.addDishToCourse(`mains`, `steak`, 15.0);
menu.addDishToCourse(`mains`, `salmon`, 17.5);
menu.addDishToCourse(`mains`, `tofu`, 12.0);

menu.addDishToCourse(`desserts`, `ice cream`, 7.0);
menu.addDishToCourse(`desserts`, `cake`, 10.0);
menu.addDishToCourse(`desserts`, `souffle`, 12.5);

console.log(menu.courses);
const meal = menu.generateRandomMeal();
console.log(meal);
