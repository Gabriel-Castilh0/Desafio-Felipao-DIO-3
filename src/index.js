class hero {
    constructor(name,age,heroType){
        this.name = name
        this.age = age
        this.heroType = heroType
     }
}
let myHero = new hero ("Gabriel", "25","mago");
console.log(myHero)

switch(myHero.heroType) {
    case "ninja":
      attack = "shuriken"
      break;
    case "monge":
      attack = "artes marcias"
      break;
    case "guerreiro":
      attack = "espada"
      break;
    case "mago":
      attack = "magia"
      break;
}


console.log(`O ${myHero.heroType} atacou usando ${attack}!`)