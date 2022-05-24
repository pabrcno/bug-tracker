import { Scaffold } from "./components";
import { useAppSelector } from "../../application/hooks/redux/hooks";

const Main = () => {
  const view = useAppSelector((state) => state.view.view);
  return <Scaffold {...view} />;
};
export default Main;
