import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { useNavigation } from '@react-navigation/native'


export function ReturnButton() {
    const { goBack } = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={goBack}
            className="mt-6"
        >
            <Feather
                name="arrow-left"
                size={25}
                color={colors.zinc[600]}
            />
        </TouchableOpacity>
    )
 }