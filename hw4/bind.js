let me = {
  name: 'Mykola',
  residency: 'Lviv',
  gender: 'male',
  age: 31,
  hobby: 'crafting',
  defaultMood: 'focused',
  currentMood: 'sleepy',
  introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
  },
  prognose() {
    console.log(`I hope that next year I'm gonna be ${this.age+1}`);
  },
  describeMyMood(){
    console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
  }
}

me.introduce();
me.prognose();
me.describeMyMood();

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат
setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат
