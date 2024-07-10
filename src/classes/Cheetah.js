import Cat from "./Cat";

class Cheetah extends Cat {
  constructor() {
    super();
    console.log(`Inside Cheetah Constructor`);
  }

  foodBehaviour = () => {
    console.log(`Cheetah hunts deers and eat`);
  };
  sleepingBehaviour = () => {
    console.log(`Cheetah sleeps in Forest`);
  };
  facingHuman = () => {
    console.log(`Human Runs Away from Cheetah`);
  };
  runningspeed=()=>{
    console.log(`Cheetah runs at 120kmph`);
  };
}

export default Cheetah;
