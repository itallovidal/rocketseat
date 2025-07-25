import { getAllStoredMeals } from './get-all-stored-meals'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function deleteStoredMeal(
  id: string,
  date: string,
): Promise<void> {
  const mealList = await getAllStoredMeals()
  if (!mealList.get(date)) throw new Error('Erro interno.')

  console.log('Deletando refeição..')
  mealList.get(date)!.data = mealList.get(date)!.data.filter((registry) => {
    console.log(registry.id)
    console.log(id)
    return registry.id !== id
  })

  if (mealList.get(date)!.data.length === 0) mealList.delete(date)

  console.log('Atualizando storage.')
  await AsyncStorage.setItem('@daily-diet', JSON.stringify([...mealList]))
}
