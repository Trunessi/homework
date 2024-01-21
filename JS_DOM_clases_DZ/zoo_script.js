class Animal {
  #name;
  #species;

  constructor(name, species) {
    this.#name = name;
    this.#species = species;
  }

  get name() {
    return this.#name;
  }

  get species() {
    return this.#species;
  }

  fullname() {
    return this.#species + " " + this.#name;
  }
}

class Mammal extends Animal {
  #fur_color;

  constructor(name, species, fur_color) {
    super(name, species);
    this.#fur_color = fur_color;
  }

  get fur_color() {
    return this.#fur_color;
  }

  fullname() {
    return super.fullname() + ", color - " + this.#fur_color;
  }
}

class Bird extends Animal {
  #wing_span;

  constructor(name, species, wing_span) {
    super(name, species);
    this.#wing_span = wing_span;
  }

  get wing_span() {
    return this.#wing_span;
  }

  fullname() {
    return super.fullname() + ", wing span - " + this.#wing_span;
  }
}

class Reptile extends Animal {
  #scale_type;

  constructor(name, species, scale_type) {
    super(name, species);
    this.#scale_type = scale_type;
  }

  get scale_type() {
    return this.#scale_type;
  }

  fullname() {
    return super.fullname() + ", scale type - " + this.#scale_type;
  }
}
class Zoo {
  #listOfAnimals;
  
  constructor() {
    this.#listOfAnimals = [];
  }

  // Добавить животное в зоопарк
  add_animal(animal) {
    this.#listOfAnimals.push(animal);
  }

  // Показать список всех животных в зоопарке.
  list_animals() {
    this.#listOfAnimals.forEach((animal) => {
      console.log(animal.fullname());
    });
  }

  // Показать животных определенного вида в зоопарке.
  get_animals_by_species(selSpecies) {
    this.#listOfAnimals.forEach((animal) => {
      if (animal.species === selSpecies) {
        console.log(animal.fullname());
      }
    });
  }

  // Удалить животное из зоопарка по имени.
  remove_animal(rname) {
    const newList = this.#listOfAnimals.filter(
      (animal) => animal.name !== rname
    );
    this.#listOfAnimals = newList;
  }

  // Вернуть общее количество животных в зоопарке.
  count_animals() {
    return this.#listOfAnimals.length;
  }
}

// Test

const zoo = new Zoo([]);
const cat1 = new Mammal("Matroskin", "cat", "black");
const cat2 = new Mammal("Matfej", "cat", "orange");
const wolf1 = new Mammal("Lupus", "wolf", "grey");
const bird1 = new Bird("Screamer", "seagull", 1.2);
const bird2 = new Bird("Scavenger", "seagull", 1.6);
const bird3 = new Bird("Tweeter", "sparrow", 0.2);
const rep1 = new Reptile("Gorynych", "snake", "horny");
const rep2 = new Reptile("Nagaina", "snake", "horny");
const rep3 = new Reptile("Nessi", "dinosaur", "horny");

zoo.add_animal(cat1);
zoo.add_animal(cat2);
zoo.add_animal(wolf1);

zoo.add_animal(bird1);
zoo.add_animal(bird2);
zoo.add_animal(bird3);

zoo.add_animal(rep1);
zoo.add_animal(rep2);
zoo.add_animal(rep3);

zoo.list_animals();
console.log("Created animals: " + zoo.count_animals());

console.log("AFTER DELETE:");

zoo.remove_animal("Matroskin");
console.log("Animals count: " + zoo.count_animals());

zoo.list_animals();

zoo.get_animals_by_species("snake");
