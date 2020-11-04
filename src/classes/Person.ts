// By default, all attributes in a class are public
// This means they can be read and modified from either inside or outside of the class

export class Person {
  // When using class modifiers, we can refactor the attributes to be shorter
  // public firstName: string;
  // public lastName: string;
  // private age: number;
  // readonly canDrink: boolean;

  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    readonly canDrink: boolean
  ) {}

  private fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  format() {
    // We can't change the value of this.canDrink because the property is set to readonly
    // this.canDrink = false; // Cannot assign to 'canDrink' because it is a read-only property.
    return `${this.fullName()} ${this.age >= 21 ? 'can drink' : "can't drink"}!`;
  }
}
