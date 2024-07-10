class SSCStudent {
  constructor(
    name,
    engMarks,
    telMarks,
    hinMarks,
    sciMarks,
    socMarks,
    mathMarks
  ) {
    console.log(`Creating SSC Student Copy`);
    this.name = name;
    this.engMarks = engMarks;
    this.telMarks = telMarks;
    this.hinMarks = hinMarks;
    this.mathMarks = mathMarks;
    this.sciMarks = sciMarks;
    this.socMarks = socMarks;

    console.log(
      name,
      engMarks,
      telMarks,
      hinMarks,
      sciMarks,
      socMarks,
      mathMarks
    );
  }
  calculateResult = () => {
    let passMarks = 35;
    if (
      this.engMarks >= passMarks &&
      this.hinMarks >= passMarks &&
      this.telMarks >= passMarks &&
      this.sciMarks >= passMarks &&
      this.socMarks >= passMarks &&
      this.mathMarks >= passMarks
    ) {
      console.log(`${this.name} passed in Exam`);
    } else {
      console.log(`${this.name} failed in Exam`);
    }
  };
  emirabalaraju = () => {
    let passainamarkulu = 85;
    if (
      this.engMarks >= passainamarkulu &&
      this.hinMarks >= passainamarkulu &&
      this.telMarks >= passainamarkulu &&
      this.sciMarks >= passainamarkulu &&
      this.socMarks >= passainamarkulu &&
      this.mathMarks >= passainamarkulu
    ) {
      console.log(`${this.name} passed in Exam`);
    } else {
      console.log(`${this.name} failed in Exam`);
    }
  };
}

export default SSCStudent;

