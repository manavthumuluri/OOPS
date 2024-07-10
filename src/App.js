import "./App.css";
import Cat from "./classes/Cat";
import Cheetah from "./classes/Cheetah";
import SSCStudent from "./classes/SSCStudent";
import TenthStudent from "./components/TenthStudent";

function App() {

  let meow = new Cat();
  meow.noOLegs=3;
  meow.foodBehaviour();
  meow.sleepingBehaviour();
  meow.facingHuman();
  console.log(`------------------------------`)

  let chirutha= new Cheetah();
  chirutha.foodBehaviour();
  chirutha.sleepingBehaviour();
  chirutha.facingHuman();
  console.log(`---------------------`)

  
let manav = new SSCStudent("Manav",99,92,93,94,95,96);
manav.emirabalaraju();
let harsha = new SSCStudent("Harsha",81,82,83,84,85,86);
harsha.emirabalaraju();
let vishnu = new SSCStudent("Vishnu",71,72,73,74,75,76);
vishnu.emirabalaraju();
let grandhi = new SSCStudent("Grandhi",61,62,63,64,95,66);
grandhi.calculateResult();

  return (
    <div className="App">
      <TenthStudent
        name="Manav"
        telMarks="91"
        hinMarks="92"
        engMarks="93"
        mathMarks="94"
        sciMarks="95"
        socMarks="96"
      ></TenthStudent>

      <TenthStudent
        name="Harsha"
        telMarks="81"
        hinMarks="82"
        engMarks="83"
        mathMarks="84"
        sciMarks="85"
        socMarks="86"
      ></TenthStudent>

      <TenthStudent
        name="Grandhi"
        telMarks="71"
        hinMarks="72"
        engMarks="73"
        mathMarks="74"
        sciMarks="75"
        socMarks="76"
      ></TenthStudent>

      <TenthStudent
        name="Vishnu"
        telMarks="61"
        hinMarks="62"
        engMarks="63"
        mathMarks="64"
        sciMarks="65"
        socMarks="66"
      ></TenthStudent>
    </div>
  );
}

export default App;
