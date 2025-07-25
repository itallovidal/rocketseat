import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/home/home'
import { TAppRoutes } from './routes'
import { FormFinish } from '../screens/form-finish/form-finish'
import { MealDetails } from '../screens/meal-details/meal-details'
import { NavigationContainer } from '@react-navigation/native'
import { MealForm } from '../screens/meal-form/meal-form'
import { Statistics } from '../screens/statistics/statistics'

const { Navigator, Screen } = createNativeStackNavigator<TAppRoutes>()

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={'home'} component={Home} />
        <Screen name={'statistics'} component={Statistics} />
        <Screen name={'mealForm'} component={MealForm} />
        <Screen name={'mealFormFinish'} component={FormFinish} />
        <Screen name={'mealDetails'} component={MealDetails} />
      </Navigator>
    </NavigationContainer>
  )
}
