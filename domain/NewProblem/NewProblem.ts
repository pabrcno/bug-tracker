import ProblemType from "../ProblemType/ProblemType";

type NewProblem = {
  issuerEmail: string;
  description: string;
  problemType: ProblemType;
};

export default NewProblem;
