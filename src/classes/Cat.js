class Cat {
  constructor() {
    console.log(`Inside Cat Constructor`);

    this.noOfEyes = 2;
    this.noOfLegs = 2;
    this.noOLegs = 2;
  }

  foodBehaviour = () => {
    console.log(`Cat hunts rats and drink milk.`);
  };
  sleepingBehaviour = () => {
    console.log(`Cat sleeps in corners of the house.`);
  };
  facingHuman = () => {
    console.log(`Cat Runs away from Human`);
  };
}

export default Cat;
