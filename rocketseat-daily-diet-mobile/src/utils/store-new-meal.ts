import { IMeal, IMealSchema } from '../screens/meal-form/schema'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns'
import uuid from 'react-native-uuid'
import { getAllStoredMeals } from './get-all-stored-meals'

export interface IMealList {
  title: string
  data: IMeal[]
}

// export async function storeNewMeal(newMeal: IMealSchema) {
//   const dateKey = format(newMeal.date, 'dd/MM/yyyy') // -> 23/09/2024
//   const response = await AsyncStorage.getItem('@daily-diet')
//
//   if (response) {
//     const stored = JSON.parse(response)
//     const storedMeals: Map<string, IMealList> = new Map(stored)
//
//     if (storedMeals.has(dateKey)) {
//       storedMeals.get(dateKey)!.data.push({
//         ...newMeal,
//         id: uuid.v4().toString(),
//       })
//     } else {
//       storedMeals.set(dateKey, {
//         title: dateKey,
//         data: [
//           {
//             ...newMeal,
//             id: uuid.v4().toString(),
//           },
//         ],
//       })
//     }
//
//     await AsyncStorage.setItem('@daily-diet', JSON.stringify([...storedMeals]))
//     return
//   }
//
//   const hashMap = new Map<string, IMealList>()
//
//   hashMap.set(dateKey, {
//     title: dateKey,
//     data: [
//       {
//         ...newMeal,
//         id: uuid.v4().toString(),
//       },
//     ],
//   })
//
//   console.log('Registro criado pela primeira vez!')
//   console.log(hashMap)
//
//   await AsyncStorage.setItem('@daily-diet', JSON.stringify([...hashMap]))
// }

export async function storeNewMeal(newMeal: IMealSchema) {
  const dateKey = format(newMeal.date, 'dd/MM/yyyy')
  const storedMeals = await getAllStoredMeals()

  if (storedMeals.has(dateKey)) {
    console.log('A data já possui refeições, adicionando à lista..')
    storedMeals.get(dateKey)!.data.push({
      ...newMeal,
      id: uuid.v4().toString(),
    })
  }

  if (storedMeals.size === 0 || !storedMeals.has(dateKey)) {
    console.log('Primeira refeição desta data.')
    storedMeals.set(dateKey, {
      title: dateKey,
      data: [
        {
          ...newMeal,
          id: uuid.v4().toString(),
        },
      ],
    })
  }

  console.log('Salvando em memória..')
  await AsyncStorage.setItem('@daily-diet', JSON.stringify([...storedMeals]))
}
