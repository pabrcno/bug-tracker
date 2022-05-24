import View from "../../domain/View/view";
import SuccessMessage from "./components/SuccessMessage";
import SuccessViewActionButton from "./components/SuccessViewActionButton";
import SuccessViewBackButton from "./components/SuccessViewBackButton";

const view: View = {
  title: "",
  body: <SuccessMessage></SuccessMessage>,
  actionButton: <SuccessViewActionButton />,
  navIconButton: <SuccessViewBackButton />,
};

export default view;
