import {Text, TouchableOpacity, View, TouchableOpacityProps} from "react-native";
import {Feather} from "@expo/vector-icons";
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps{
    checked?: boolean;
    title: string;
}

export function CheckBox({title, checked=false, ...rest }:Props) {
    return (
        <TouchableOpacity

            activeOpacity={0.7}
            className="flex-row mb-2 items-center"
            {...rest}
        >
            {
                checked
                ?
                    <View className="h-8 w-8 bg-cyan-600 rounded-lg items-center justify-center">
                        <Feather
                            name="check"
                            size={12}
                            color={colors.zinc[100]}
                        />
                    </View>
                :
                    <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
            }

            <Text className="text-zinc-200 ml-3">
                {title}
            </Text>
        </TouchableOpacity>
    )

}