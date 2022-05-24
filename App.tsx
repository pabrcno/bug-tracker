import { Scaffold } from "./presentation/core/components";
import newProblemView from "./presentation/NewProblemView";
export default function App() {
  const view = newProblemView;
  return <Scaffold {...view} />;
}
