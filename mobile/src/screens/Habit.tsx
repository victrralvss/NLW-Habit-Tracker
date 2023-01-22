import {ScrollView, Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {ReturnButton} from "../components/ReturnButton";
import dayjs from "dayjs";
import {ProgressBar} from "../components/ProgressBar";
import {CheckBox} from "../components/CheckBox";


interface Params {
    date: string
}

export function Habit() {
    const route = useRoute();
    const {date} = route.params as Params

    const parseDate = dayjs(date);
    const dayOfWeek = parseDate.format('dddd');
    const dayMonth = parseDate.format('DD/MM')

    console.log(date)

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 100}}
            >
                <ReturnButton/>
                <Text className="mt-8 text-3xl text-zinc-400 font-semibold text-base">
                    {dayOfWeek}
                </Text>

                <Text className="mt-3 text-6xl text-zinc-200 font-extrabold ">
                    {dayMonth}
                </Text>

                <ProgressBar progress={50} />

                <View className="mt-6">
                    <CheckBox title="Meditar" checked={false} />
                </View>

            </ScrollView>
        </View>
    )
}