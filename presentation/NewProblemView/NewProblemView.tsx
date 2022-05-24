import { NavIconButton } from "../core/components";
import NewProblemBody from "./components/NewProblemBody";
import NewProblemActionButton from "./components/NewProblemActionButton";

const view = {
  actionButton: <NewProblemActionButton />,
  body: <NewProblemBody />,
  title: "New Problem",
  navIconButton: <NavIconButton icon="arrowleft" onPress={() => {}} />,
};

export default view;
