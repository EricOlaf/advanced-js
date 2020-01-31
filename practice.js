// Create a lastYear method on the Date object to get the previous year from a date.
// Date.prototype.lastYear = function(){
//     return this.getFullYear() - 1;
// }

// console.log(new Date('1900-12-2').lastYear())

// Array.prototype.map = function(){
//     let newArr = []
//     for(let i = 0; i < this.length; i++){
//         newArr.push(this[i] + "☠");
//     }
//     return newArr;
// }

// Function.prototype.bind = function(whoIsCallingMe){
//     const self = this;
//     return function(){
//       return self.apply(whoIsCallingMe, arguments);
//     };
//   }

// const eric = {
//     name: "Eric Ola",
//     age: "31",
//     hobbies: ['hoop', 'lift', 'party outside'],
//     hobbiesLog(){
//         this.hobbies.forEach(x=>
//             console.log("I luf to: "+ x)
//             )
//     }
// }

// const abs = {
//     name: "Babe",
//     age: "26",
//     hobbies: ['nurse', 'lift', 'party in da water']
// }

// abs.hLog = eric.hobbiesLog.bind(abs);

// abs.hLog();
// eric.hobbiesLog();


// class Character {
//     constructor(name, weapon) {
//       this.name = name;
//       this.weapon = weapon;
//     }
//     attack() {
//       return 'atack with ' + this.weapon
//     }
//   }

//   class Queen extends Character{
//       constructor(name, weapon, type){
//           super(name, weapon)
//           this.type = type
//       }
//       attack(){
//           return super.attack() + `.\nI am ${this.name} of ${this.type}, now bow down to me`;
          
//       }
//   }
//   //Polymorphism--
//   //Extend the Character class to have a Queen class. The output of the below code should be:
//   const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'
  
//   console.log(victoria.attack()) // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '

////////////////////////////////////////////////////
// FUNCTIONAL PROGRAMMING
////////////////////////////////////////////////////

// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

items = ["apples, 1", "bananas, 2", "steak, 5"]

const addToCart = (item, cust) => {
  const [thing, cost] = item.split(', ')
  cust.cart.push([thing, (parseInt(cost) * 1.03)]);
  return "added to cart";
}

const buyCart = (cust) => {
  const total = cust.cart.reduce((acc, itemArr)=>itemArr[1] + acc , 0);
  cust.purchases.push(...cust.cart)
  cust.cart = [];
  return total;
}

console.log(addToCart(items[0], user));
console.log(addToCart(items[1], user));
console.log(addToCart(items[2], user));
console.log(user);
console.log(buyCart(user));
console.log(user);

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.