// Write your JS here
const myHero = {};
const hero = {
  name: "",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "",
    damage: 2
  }
};

const person = hero;
const wepon = hero.weapon;
console.log(person.weapon);

function submitName() {
  const button = document.getElementById("button");
  const p = document.createElement("p");
}

function healthToTen() {
  hero.health = 10;
}

function dagger() {
  person.inventory.push(person.weapon);
  person.weapon.type = "dagger";
}

function sword() {
  person.inventory.push(person.weapon);
  person.weapon.type = "sword";
}

function bowArrow() {
  person.inventory.push(person.weapon);
  person.weapon.type = "BowArrow";
}

function rest(person) {
  if (person.health === 10) {
    alert("health is already 10");
  } else {
    person.health = 10;
  }
  return person;
}

function pickUpItem(person, wepon) {
  person.inventory.push(wepon);
}

function equipWeapon(person) {
  person.inventory.unshift(wepon);
}

function firstItemOnInventory() {
  person.weapon = hero.inventory[0];
}

function displayStats() {
  const inventory = document.getElementById("yourweapon");
  const health = document.getElementById("health");

  const healthLevel = document.createElement("p");
  const yourWeapons = document.createElement("p");
}
