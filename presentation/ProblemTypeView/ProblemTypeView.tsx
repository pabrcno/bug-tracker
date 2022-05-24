import ProblemTypeList from "./components/ProblemTypeList";
import ProblemTypeBackButton from "./components/ProblemTypeBackButton";
import ProblemTypeActionButton from "./components/ProblemTypeActionButton";
const view = {
  actionButton: <ProblemTypeActionButton />,
  body: <ProblemTypeList />,
  title: "Problem types",
  navIconButton: <ProblemTypeBackButton />,
};

export default view;
