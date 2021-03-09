class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The Player ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  level: number;
  // readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    console.log("_______GET_________");
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }
}

const will = new UserAccount("Willian", 30);
console.log(will);

will.logDetails();

const john = new CharAccount("John", 45, "johnmaster", 80);

console.log(john);
