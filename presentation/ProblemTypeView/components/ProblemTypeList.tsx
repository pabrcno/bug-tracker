import { FlatList } from "react-native";
import { setSelectedProblemType } from "../../../application/features/problemType";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../application/hooks/redux/hooks";
import ProblemType from "../../../domain/ProblemType/ProblemType";
import ProblemTypeTile from "./ProblemTypeTile";
const problemtypes: ProblemType[] = [
  {
    id: "1",
    title: "Проблема с приложением",
    description: "Проблема с приложением",
  },
  {
    id: "2",
    title: "Проблема с приложением",
    description: "Проблема с приложением",
  },
  {
    id: "3",

    title: "Проблема с приложением",
    description: "Проблема с приложением",
  },
  {
    id: "4",
    title: "Проблема с приложением",
    description: "Проблема с приложением",
  },
  {
    id: "5",
    title: "Проблема с приложением",
    description: "Проблема с приложением",
  },
  {
    id: "6",
    title: "Проблема с приложением",
    description: "Проблема с приложением",
  },
  {
    id: "7",
    title: "Проблема с приложением",
    description: "Проблема с приложением",
  },
];

const ProblemTypeList = () => {
  const selectedProblemType = useAppSelector(
    (state) => state.problemType.selectedProblemType
  );
  const dispatch = useAppDispatch();
  return (
    <FlatList
      data={problemtypes}
      renderItem={({ item }) => (
        <ProblemTypeTile
          key={item.id}
          problemType={item}
          onTap={() => {
            dispatch(setSelectedProblemType(item));
          }}
          isSelected={selectedProblemType.id === item.id}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
export default ProblemTypeList;
