// export class HungryBear {
//   constructor (name) {
//     this.name = name;
//     this.foodLevel = 10;
//   }
//
//   function welcome(salutation) {
//     return function(yourName) {
//       return `${salutation}! Nice to meet you, ${yourName}!`
//     }
//   }
//
//   setHunger() {
//     setInterval(() => {
//       this.foodLevel--;
//     }, 1000);
//   }
//
//   didYouGetEaten() {
//     if (this.foodLevel > 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//
//   feed() {
//     this.foodLevel = 10;
//   }
// };

export let bear = {
  foodLevel:10,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    // let that = this;
    return (food) => {
      this.foodLevel += amount;
      return `The bear ate the ${food}! Food level goes up ${amount}!`
    }
  }
};

bear.earSmall = bear.feed(5);
bear.earMedium = bear.feed(10);
bear.earLarge = bear.feed(15);
