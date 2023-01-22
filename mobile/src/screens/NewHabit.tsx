import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {ReturnButton} from "../components/ReturnButton";
import {CheckBox} from "../components/CheckBox";
import colors from "tailwindcss/colors";
import {useState} from "react";
import {Feather} from "@expo/vector-icons";
import Logo from '../assets/logo.svg';


const weekDays = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday']


export function NewHabit() {
    const [weekDay, setWeekDays] = useState<number[]>([]);
    function handleToggleWeek(weekDayIndex: number){
        if(weekDay.includes(weekDayIndex)) {
            setWeekDays(prevState => prevState.filter(week => week !== weekDayIndex))
        } else {
            setWeekDays(prevState => [...prevState, weekDayIndex]);
        }
    }


    return (
        <View className="flex-1 bg-background px-8 pt-8">
            <ScrollView showsVerticalScrollIndicator={false}>
                <ReturnButton />

                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Create habit
                </Text>

                <Text className="mt-3 text-white font-semibold text-lg">
                    What are you trying to improve?
                </Text>

                <TextInput
                    placeholder="eg: Study, Workout, Read..."
                    placeholderTextColor={colors.zinc[600]}
                    className="h-12 pl-4 mb-3 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-cyan-600"
                />

                <Text className="mt-3 text-white font-semibold text-lg mb-3">
                    Choose when you want to accomplish?
                </Text>

                {
                    weekDays.map((weekday, index) => (
                        <CheckBox
                            key={weekday}
                            onPress={() => handleToggleWeek(index)}
                            checked={weekDay.includes(index)}
                            title={weekday}

                        />
                    ))
                }

                <TouchableOpacity className="w-full h-14 flex-row mt-28 rounded-lg bg-cyan-600 items-center text-2xl justify-center text-semibold">
                    <Feather
                        name="check"
                        size={20}
                        color={colors.zinc[200]}
                    />

                    <Text className="text-zinc-200 ">
                        Confirm
                    </Text>
                </TouchableOpacity>

                <View className="w-full flex-row justify-center items-center mt-10">
                    <Logo width={50}/>
                </View>

            </ScrollView>
        </View>
    )
}