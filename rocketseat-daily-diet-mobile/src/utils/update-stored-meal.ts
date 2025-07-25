import { getAllStoredMeals } from './get-all-stored-meals'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IMealSchema } from '../screens/meal-form/schema'
import { format } from 'date-fns'

export async function updateStoredMeal(
  id: string,
  date: Date,
  newInfo: IMealSchema,
): Promise<void> {
  const mealList = await getAllStoredMeals()
  const dateKey = format(date, 'dd/MM/yyyy')
  if (!mealList.get(dateKey)) throw new Error('Erro interno.')

  console.log('atualizando refeição..')
  mealList.get(dateKey)!.data = mealList.get(dateKey)!.data.map((registry) => {
    if (registry.id === id) {
      return {
        ...newInfo,
        id: registry.id,
      }
    }

    return registry
  })

  console.log('Atualizando storage.')
  await AsyncStorage.setItem('@daily-diet', JSON.stringify([...mealList]))
}
