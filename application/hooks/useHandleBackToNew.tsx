import { reset } from "../features/view";
import { useAppDispatch } from "./redux/hooks";

const useHandleBackToNew = () => {
  const dispatch = useAppDispatch();
  const handleOnPress = () => {
    dispatch(reset());
  };
  return handleOnPress;
};

export default useHandleBackToNew;
