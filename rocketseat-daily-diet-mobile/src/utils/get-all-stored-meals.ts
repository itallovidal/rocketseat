import AsyncStorage from '@react-native-async-storage/async-storage'
import { IMealList } from './store-new-meal'

export async function getAllStoredMeals(): Promise<Map<string, IMealList>> {
  // await AsyncStorage.clear()
  console.log('Recuperando registro de refeições..')
  const response = await AsyncStorage.getItem('@daily-diet')

  if (response) {
    const stored = JSON.parse(response)
    console.log('Registro de refeições recuperado com sucesso.')
    return new Map(stored)
  }

  return new Map()
}
