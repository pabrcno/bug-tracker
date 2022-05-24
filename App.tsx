import {
  ActionButton,
  AppTextInput,
  NavIconButton,
  Scaffold,
} from "./presentation/core/components";

export default function App() {
  return (
    <Scaffold
      navIconButton={<NavIconButton onPress={() => {}} icon={"arrowleft"} />}
      title={"Hello world Hello world"}
      body={<AppTextInput />}
      actionButton={<ActionButton onPress={() => {}} text={"Login"} />}
    />
  );
}
