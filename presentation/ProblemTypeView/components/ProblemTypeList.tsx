import { FlatList } from "react-native";
import { useAppSelector } from "../../../application/hooks/redux/hooks";
import useSetProblemType from "../../../application/hooks/useSetProblemType";
import ProblemType from "../../../domain/ProblemType/ProblemType";
import ProblemTypeTile from "./ProblemTypeTile";

const ProblemTypeList = () => {
  const problemTypeState = useAppSelector((state) => state.problemType);
  const handleTap = useSetProblemType();
  return (
    <FlatList
      data={problemTypeState.problemTypes}
      renderItem={({ item }) => (
        <ProblemTypeTile
          key={item.id}
          problemType={item}
          onTap={() => handleTap(item)}
          isSelected={problemTypeState.selectedProblemType.id === item.id}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
export default ProblemTypeList;
