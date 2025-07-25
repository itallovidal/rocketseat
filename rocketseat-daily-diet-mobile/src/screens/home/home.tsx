import { Header } from '../../components/header/header'
import { Wrapper } from './home.style'
import { DietPercentage } from './components/diet-percentage/diet-percentage'
import { DayMealList } from './components/day-meal-list/day-meal-list'
import { Text } from '../../components/global.styles'
import { Button } from '../../components/button/button'
import { Plus } from 'lucide-react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { TAppRoutesProps } from '../../routes/routes'
import { useCallback, useState } from 'react'
import { getAllStoredMeals } from '../../utils/get-all-stored-meals'
import { IMealList } from '../../utils/store-new-meal'

export function Home() {
  const { navigate } = useNavigation<TAppRoutesProps>()
  const [storedMeals, setStoredMeals] = useState<IMealList[]>([])

  useFocusEffect(
    useCallback(() => {
      getAllStoredMeals().then((data) => {
        const stored = Array.from(data.values())
        setStoredMeals(stored)
      })
    }, []),
  )

  return (
    <Wrapper>
      <Header />
      <DietPercentage />
      <Text style={{ marginVertical: 12, marginTop: 24 }} variant={'neutral'}>
        Refeições
      </Text>
      <Button
        onPress={() => navigate('mealForm')}
        icon={<Plus size={18} color={'white'} />}
      >
        Nova Refeição
      </Button>
      <DayMealList storedMeals={storedMeals} />
    </Wrapper>
  )
}
