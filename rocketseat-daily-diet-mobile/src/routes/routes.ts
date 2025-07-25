import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { IMeal, IMealSchema } from '../screens/meal-form/schema'

export type TAppRoutes = {
  home: undefined
  mealForm:
    | {
        mealToEdit: IMeal
      }
    | undefined
  mealFormFinish: {
    status: boolean
  }
  mealDetails: {
    meal: IMealSchema
  }
  statistics: {
    stats: Omit<IProfile, 'picture' | 'name'>
  }
}

export type TAppRoutesProps = NativeStackNavigationProp<TAppRoutes>
