import { setIssuerEmail } from "../features/newProblem";
import { useAppDispatch } from "./redux/hooks";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const useSetIssuerEmail = () => {
  const dispatcher = useAppDispatch();
  const handleChange = (email: string) => {
    if (validateEmail(email)) {
      dispatcher(setIssuerEmail(email));
    }
  };
  return handleChange;
};

export default useSetIssuerEmail;
