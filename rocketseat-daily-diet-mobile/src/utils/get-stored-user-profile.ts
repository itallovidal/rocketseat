import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getStoredUserProfile(): Promise<IProfile> {
  const response = await AsyncStorage.getItem('@daily-diet:profile')
  if (!response)
    return {
      meals: 0,
      dietIn: 0,
      bestSequence: 0,
      name: '',
      dietOut: 0,
      picture: '',
      actualSequence: 0,
    }

  return JSON.parse(response)
}
