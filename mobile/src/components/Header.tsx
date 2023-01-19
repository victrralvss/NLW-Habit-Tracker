import {View, TouchableOpacity, Text} from "react-native";
import Logo from '../assets/logo.svg';
import {Feather} from '@expo/vector-icons'
import colors from 'tailwindcss/colors'


export function Header() {
    return (
        <View className="w-full flex-row items-center bg-background justify-between">
            <Logo/>

            <TouchableOpacity
                activeOpacity={0.7}
                className="flex-row w-28 h-11 px-6 bg-background font-bold border border-violet-500 rounded-lg items-center justify-between"
            >
                <Feather
                    name="plus"
                    color={colors.cyan[600]}
                    size={20}
                />

                <Text className="text-white font-bold">
                    New
                </Text>
            </TouchableOpacity>

        </View>
    )
}