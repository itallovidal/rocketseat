import { getStoredUserProfile } from './get-stored-user-profile'
import { getAllStoredMeals } from './get-all-stored-meals'
import { IMeal } from '../screens/meal-form/schema'
import { IMealList } from './store-new-meal'

export async function syncUserProfile() {
  const profile = await getStoredUserProfile()
  const list = await getAllStoredMeals()
  const mealList = Array.from(list.values())

  const dietInfo: IDietInfo = mealList.reduce(
    (acc: IDietInfo, currentValue: IMealList) => {
      let healthyMeals = 0
      let unHealthy = 0

      currentValue.data.forEach((meal: IMeal) => {
        healthyMeals += meal.isHealthyFood ? 1 : 0
        unHealthy += !meal.isHealthyFood ? 1 : 0
      })

      return {
        healthy: acc.healthy + healthyMeals,
        unHealthy: acc.unHealthy + unHealthy,
        total: acc.total + currentValue.data.length,
      }
    },
    {
      healthy: 0,
      total: 0,
      unHealthy: 0,
    },
  )

  profile.dietIn = dietInfo.healthy
  profile.dietOut = dietInfo.unHealthy
  profile.meals = dietInfo.total

  return profile
}
