import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { colors } from "../constants";

type Props = {
  onPress: () => void;
  icon: "arrowleft" | "close";
};
const NavIconButton = ({ onPress, icon }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <AntDesign name={icon} size={24} color={colors.navIconColor} />
  </TouchableOpacity>
);
export default NavIconButton;
