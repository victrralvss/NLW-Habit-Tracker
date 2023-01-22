import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Habit} from '../screens/Habit'
import {NewHabit} from '../screens/NewHabit'
import {Home} from '../screens/Home'

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {

    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="new"
                component={NewHabit}
            />

            <Screen
                name="habit"
                component={Habit}
            />
        </Navigator>
    )

}