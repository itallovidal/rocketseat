import { getStoredUserProfile } from './get-stored-user-profile'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function updateUserProfile(lastMealStatus: boolean) {
  const profile = await getStoredUserProfile()

  if (lastMealStatus) {
    profile.actualSequence += 1
  } else {
    profile.actualSequence = 0
  }

  if (profile.actualSequence > profile.bestSequence) {
    profile.bestSequence = profile.actualSequence
  }

  await AsyncStorage.setItem('@daily-diet:profile', JSON.stringify(profile))
}
