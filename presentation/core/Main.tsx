import { Scaffold } from "./components";
import { useAppSelector } from "../../application/hooks/redux/hooks";
import newProblemView from "../NewProblemView";
const Main = () => {
  const view = useAppSelector((state) => state.view.view) || newProblemView;
  return <Scaffold {...view} />;
};
export default Main;
